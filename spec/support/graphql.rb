module GraphQLHelpers
  def global_id(record)
    CqspotsSchema.id_from_object(record, nil, nil)
  end
end

RSpec.configure do |config|
  config.include GraphQL::Testing::Helpers.for(CqspotsSchema), type: :graphql
  config.include GraphQLHelpers, type: :graphql
end
