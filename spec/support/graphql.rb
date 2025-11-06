RSpec.configure do |config|
  config.include GraphQL::Testing::Helpers.for(CqspotsSchema), type: :graphql
end
