module Types
  class BoundsAttributes < BaseInputObject
    argument :corner_1, PointAttributes, required: true
    argument :corner_2, PointAttributes, required: true
  end
end
