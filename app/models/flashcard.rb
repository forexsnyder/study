class Flashcard < ApplicationRecord
  has_many :comments

  belongs_to :topic
end
