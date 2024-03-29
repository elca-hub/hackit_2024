class PartTime < ApplicationRecord
    has_many :shifts, dependent: :destroy
    belongs_to :part_time_color
    belongs_to :user

    def index_part_times_to_json
        {
            id: self.id,
            name: self.job_name
        }
    end

    def details_part_time_to_json
        {
            part_time: self,
            part_time_color: PartTimeColor.find(part_time_color_id)
        }
    end
end
