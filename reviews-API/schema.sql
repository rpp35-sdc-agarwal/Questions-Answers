CREATE DATABASE reviews;

CREATE TABLE "reviews" (
  "review_id" serial PRIMARY KEY,
  "product_id" int NOT NULL,
  "rating" int,
  "date" numeric,
  "summary" varchar,
  "body" varchar,
  "recommend" boolean DEFAULT false,
  "reported" boolean  DEFAULT false,
  "reviewer_name" varchar,
  "reviewer_email" varchar,
  "response" varchar DEFAULT null,
  "helpfulness" int DEFAULT 0,
);

CREATE TABLE "photos" (
  "id" int PRIMARY KEY,
  "review_id" int,
  "url" varchar
);

CREATE TABLE "characteristics_reviews" (
  "id" int PRIMARY KEY,
  "characteristic_id" int,
  "review_id" int,
  "value" int
);

CREATE TABLE "characteristics" (
  "id" int PRIMARY KEY,
  "product_id" int NOT NULL,
  "name" varchar
);

ALTER TABLE "photos" ADD FOREIGN KEY ("review_id") REFERENCES "reviews" ("id");

ALTER TABLE "characteristics_reviews" ADD FOREIGN KEY ("review_id") REFERENCES "reviews" ("id");

ALTER TABLE "characteristics_reviews"  ADD FOREIGN KEY ("characteristic_id") REFERENCES "characteristics" ("id");