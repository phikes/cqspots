require "graphql/rake_task"
GraphQL::RakeTask.new(schema_name: "CqspotsSchema")

task "graphql:schema:generate" => "graphql:schema:idl" do
  FileUtils.mv "./schema.graphql", Rails.root.join("frontend/src/")
end
