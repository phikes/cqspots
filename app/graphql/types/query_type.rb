module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # field :clusters, [ClusterType], null: false do
    #   argument :bounds, BoundsAttributes, required: true
    # end

    field :spots, SpotType.connection_type, null: false
    field :viewer, UserType, null: true

    def clusters(bounds:)
      spots = Spot.arel_table

      Spot.from(
        Spot.select(
          "*",
          Arel::Nodes::NamedFunction.new(
            "ST_ClusterKMeans",
            [
              Arel::Nodes::NamedFunction.new(
                "CAST",
                [
                  Arel::Nodes::As.new(
                    spots[:lonlat],
                    Arel.sql("\"geometry\"")
                  )
                ]
              ),
              3
            ]
          )
            .over
            .as("cluster")
        )
          .where(
            Arel::Nodes::NamedFunction.new(
              "ST_Contains",
              [
                Arel::Nodes::NamedFunction.new(
                  "ST_MakeEnvelope",
                  [
                    Arel.sql(bounds.dig(:corner_1, :x).to_s),
                    Arel.sql(bounds.dig(:corner_1, :y).to_s),
                    Arel.sql(bounds.dig(:corner_2, :x).to_s),
                    Arel.sql(bounds.dig(:corner_2, :y).to_s),
                    Arel.sql("4326")
                  ]
                ),
                Arel::Nodes::NamedFunction.new(
                  "CAST",
                  [
                    Arel::Nodes::As.new(
                      spots[:lonlat],
                      Arel.sql("\"geometry\"")
                    )
                  ]
                )
              ]
            )
          )
      )
        .group(:cluster)
        .select(
          [
            Arel::Nodes::NamedFunction.new(
              "COUNT",
              [
                Arel.sql("*")
              ]
            ),
            Arel::Nodes::NamedFunction.new(
              "ST_Centroid",
              [
                Arel::Nodes::NamedFunction.new(
                  "ST_Collect",
                  [
                    Arel::Nodes::NamedFunction.new(
                      "CAST",
                      [
                        Arel::Nodes::As.new(
                          Arel.sql("lonlat"),
                          Arel.sql("\"geometry\"")
                        )
                      ]
                    )
                  ]
                )
              ]
            )
              .as("center")
          ]
        )
    end

    def spots
      Spot.all
    end

    def viewer
      context[:current_user]
    end
  end
end
