module Types
  class PointAttributes < BaseInputObject
    argument :x, Float, required: true
    argument :y, Float, required: true
  end
end
