class CreateFlashcards < ActiveRecord::Migration[6.0]
  def change
    create_table :flashcards do |t|
      t.text :front
      t.text :back
      t.references :topic, null: false, foreign_key: true

      t.timestamps
    end
  end
end
