/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "states" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "state_id" INTEGER NOT NULL,
    "weather_id" INTEGER NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "risk_zones" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "risk" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "city_id" INTEGER NOT NULL,

    CONSTRAINT "risk_zones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "points_interest" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "risk_zone_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "points_interest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weathers" (
    "id" SERIAL NOT NULL,
    "current_weather_id" INTEGER NOT NULL,
    "weather_forecast_id" INTEGER NOT NULL,

    CONSTRAINT "weathers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "current_weathers" (
    "id" SERIAL NOT NULL,
    "temperature" DECIMAL(65,30) NOT NULL,
    "thermal_sensation" DECIMAL(65,30) NOT NULL,
    "humidity" DECIMAL(65,30) NOT NULL,
    "wind_velocity" DECIMAL(65,30) NOT NULL,
    "pressure" DECIMAL(65,30) NOT NULL,
    "condition" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "current_weathers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weather_forecasts" (
    "id" SERIAL NOT NULL,
    "temperature_min" DECIMAL(65,30) NOT NULL,
    "temperature_max" DECIMAL(65,30) NOT NULL,
    "thermal_sensation_min" DECIMAL(65,30) NOT NULL,
    "thermal_sensation_max" DECIMAL(65,30) NOT NULL,
    "humidity_min" DECIMAL(65,30) NOT NULL,
    "humidity_max" DECIMAL(65,30) NOT NULL,
    "pressure" DECIMAL(65,30) NOT NULL,
    "probability_rain" INTEGER NOT NULL,
    "rain_precipitation" DECIMAL(65,30) NOT NULL,
    "wind_velocity_avg" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "weather_forecasts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cities_weather_id_key" ON "cities"("weather_id");

-- CreateIndex
CREATE UNIQUE INDEX "weathers_current_weather_id_key" ON "weathers"("current_weather_id");

-- CreateIndex
CREATE UNIQUE INDEX "weathers_weather_forecast_id_key" ON "weathers"("weather_forecast_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "states"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_weather_id_fkey" FOREIGN KEY ("weather_id") REFERENCES "weathers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "risk_zones" ADD CONSTRAINT "risk_zones_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "points_interest" ADD CONSTRAINT "points_interest_risk_zone_id_fkey" FOREIGN KEY ("risk_zone_id") REFERENCES "risk_zones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "points_interest" ADD CONSTRAINT "points_interest_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weathers" ADD CONSTRAINT "weathers_current_weather_id_fkey" FOREIGN KEY ("current_weather_id") REFERENCES "current_weathers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weathers" ADD CONSTRAINT "weathers_weather_forecast_id_fkey" FOREIGN KEY ("weather_forecast_id") REFERENCES "weather_forecasts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
