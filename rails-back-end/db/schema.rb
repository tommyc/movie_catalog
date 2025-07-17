# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 0) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_stat_statements"
  enable_extension "plpgsql"
  enable_extension "system_stats"

  create_table "genres", id: :integer, default: nil, force: :cascade do |t|
    t.string "genre", limit: 255
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
  end

  create_table "movies", id: :integer, default: nil, force: :cascade do |t|
    t.string "title", limit: 512
    t.date "release_date"
    t.integer "runtime"
    t.string "mpaa_rating", limit: 10
    t.text "description"
    t.string "image", limit: 255
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
  end

  create_table "movies_genres", id: :integer, default: nil, force: :cascade do |t|
    t.integer "movie_id"
    t.integer "genre_id"
  end

  create_table "users", id: :integer, default: nil, force: :cascade do |t|
    t.string "first_name", limit: 255
    t.string "last_name", limit: 255
    t.string "email", limit: 255
    t.string "password", limit: 255
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
  end

  add_foreign_key "movies_genres", "genres", name: "movies_genres_genre_id_fkey", on_update: :cascade, on_delete: :cascade
  add_foreign_key "movies_genres", "movies", name: "movies_genres_movie_id_fkey", on_update: :cascade, on_delete: :cascade
end
