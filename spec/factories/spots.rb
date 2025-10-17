FactoryBot.define do
  factory :spot do
    user 
    description { "Very nice there" }
    wheelchair_accessible { [true, false].sample }
    child_friendly { [true, false].sample }
    parking { [true, false].sample }
    crowded { [true, false].sample }
    scenic { [true, false].sample }
    sitting { [true, false].sample }
    table { [true, false].sample }
    sheltered { [true, false].sample }
    trees { [false, true].sample }
    rocky { [true, false].sample }
    lonlat { "POINT(#{Faker::Address.longitude} #{Faker::Address.latitude})" }
  end
end
