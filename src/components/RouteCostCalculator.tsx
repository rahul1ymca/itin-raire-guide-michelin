import { useState } from 'react';
import { Award, Car, Clock, Compass, DollarSign, Fuel, MapPin, Navigation, Sparkles, Utensils, Zap } from 'lucide-react';
import { routePresets } from '../data/articleData';
import { Language, RouteOption } from '../types';

interface RouteCostCalculatorProps {
  lang: Language;
}

export default function RouteCostCalculator({ lang }: RouteCostCalculatorProps) {
  const [selectedRouteKey, setSelectedRouteKey] = useState<string>('paris-lyon');
  const [selectedProfile, setSelectedProfile] = useState<'recommended' | 'quickest' | 'economic' | 'scenic'>('recommended');
  const [fuelType, setFuelType] = useState<'petrol' | 'diesel' | 'hybrid' | 'electric'>('petrol');
  const [includeVehicleWear, setIncludeVehicleWear] = useState<boolean>(false);

  const currentPreset = routePresets[selectedRouteKey] || routePresets['paris-lyon'];
  const baseRoute: RouteOption = currentPreset.routes[selectedProfile];

  // Dynamic Fuel/Energy cost multipliers
  const fuelMultipliers = {
    petrol: 1.0, // Base calculation (SP95-E10 @ ~1.85€/L)
    diesel: 0.92, // Gazole (~1.70€/L)
    hybrid: 0.78, // Full hybrid (~22% savings)
    electric: 0.42, // High-speed motorway charging (~0.55€/kWh)
  };

  const adjustedFuelCost = Number((baseRoute.fuelCost * fuelMultipliers[fuelType]).toFixed(2));
  const vehicleWearCost = includeVehicleWear
    ? Number((parseFloat(baseRoute.distance.replace(' km', '')) * 0.12).toFixed(2))
    : 0;
  const totalTripCost = Number((baseRoute.tollCost + adjustedFuelCost + vehicleWearCost).toFixed(2));

  return (
    <div
      id="simulateur-couts"
      className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-6 lg:p-8 my-8 transition-all"
    >
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BE1B24]/10 text-[#BE1B24] text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === 'fr' ? "Simulateur Officieux Michelin" : "Interactive Michelin Simulator"}</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-neutral-900">
            {lang === 'fr'
              ? "Calculateur de Coûts & Profils d'Itinéraire Michelin"
              : "Michelin Itinerary Cost & Profile Calculator"}
          </h3>
          <p className="text-sm text-neutral-600 mt-1">
            {lang === 'fr'
              ? "Comparez les 4 grands choix de route Michelin avec estimation en temps réel des péages et du carburant."
              : "Compare the 4 signature Michelin route profiles with real-time toll and fuel estimates."}
          </p>
        </div>

        {/* Route Selector Dropdown */}
        <div className="shrink-0">
          <label htmlFor="select-route-preset" className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
            {lang === 'fr' ? 'Itinéraire type :' : 'Sample Route:'}
          </label>
          <select
            id="select-route-preset"
            value={selectedRouteKey}
            onChange={(e) => setSelectedRouteKey(e.target.value)}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-neutral-300 bg-neutral-50 text-neutral-800 text-sm font-medium focus:ring-2 focus:ring-[#BE1B24] focus:border-transparent outline-none cursor-pointer"
          >
            <option value="paris-lyon">Paris ➔ Lyon (A6 / N6)</option>
            <option value="bordeaux-marseille">Bordeaux ➔ Marseille (A62 / A61)</option>
            <option value="paris-strasbourg">Paris ➔ Strasbourg (A4 / N4)</option>
          </select>
        </div>
      </div>

      {/* Selected Route Badge description */}
      <div className="mt-4 p-3 rounded-xl bg-neutral-50 border border-neutral-200/60 flex items-center gap-2 text-xs text-neutral-700">
        <MapPin className="w-4 h-4 text-[#BE1B24] shrink-0" />
        <span className="font-semibold">{currentPreset.origin} ➔ {currentPreset.destination} :</span>
        <span className="text-neutral-500 italic">{currentPreset.tagline}</span>
      </div>

      {/* 4 Profile Tabs */}
      <div className="mt-6">
        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
          {lang === 'fr' ? '1. Choisissez votre profil de route Michelin :' : '1. Select your Michelin route profile:'}
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {(
            [
              { id: 'recommended', labelFR: 'Conseillé Michelin', labelEN: 'Michelin Advised', subFR: 'Équilibré & Sûr', subEN: 'Balanced & Safe' },
              { id: 'quickest', labelFR: 'Le plus rapide', labelEN: 'Fastest Route', subFR: 'Autoroute Max', subEN: 'Full Highway' },
              { id: 'economic', labelFR: 'Économique', labelEN: 'Economic', subFR: '0 € Péage', subEN: '0 € Tolls' },
              { id: 'scenic', labelFR: 'Route Découverte', labelEN: 'Scenic Green Road', subFR: 'Paysages & Patrimoine', subEN: 'Vistas & Heritage' },
            ] as const
          ).map((tab) => {
            const isSelected = selectedProfile === tab.id;
            return (
              <button
                key={tab.id}
                id={`btn-route-profile-${tab.id}`}
                onClick={() => setSelectedProfile(tab.id)}
                className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#BE1B24] bg-[#BE1B24]/5 shadow-xs ring-1 ring-[#BE1B24]'
                    : 'border-neutral-200 bg-white hover:bg-neutral-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold ${isSelected ? 'text-[#BE1B24]' : 'text-neutral-800'}`}>
                    {lang === 'fr' ? tab.labelFR : tab.labelEN}
                  </span>
                  {tab.id === 'recommended' && <Sparkles className="w-3.5 h-3.5 text-[#BE1B24]" />}
                </div>
                <span className="text-[11px] text-neutral-500 block mt-1">
                  {lang === 'fr' ? tab.subFR : tab.subEN}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fuel Type & Options */}
      <div className="mt-6 pt-5 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
            {lang === 'fr' ? '2. Motorisation du véhicule :' : '2. Vehicle powertrain:'}
          </label>
          <div className="inline-flex rounded-xl p-1 bg-neutral-100 border border-neutral-200">
            {(
              [
                { id: 'petrol', label: 'Essence (SP95)' },
                { id: 'diesel', label: 'Diesel / Gazole' },
                { id: 'hybrid', label: 'Hybride' },
                { id: 'electric', label: '100% Électrique' },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                id={`btn-fuel-${opt.id}`}
                onClick={() => setFuelType(opt.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  fuelType === opt.id
                    ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {opt.id === 'electric' && <Zap className="w-3 h-3 inline mr-1 text-emerald-600" />}
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Wear Toggle */}
        <div className="flex items-center gap-2 pt-2">
          <input
            type="checkbox"
            id="toggle-vehicle-wear"
            checked={includeVehicleWear}
            onChange={(e) => setIncludeVehicleWear(e.target.checked)}
            className="w-4 h-4 text-[#BE1B24] rounded border-neutral-300 focus:ring-[#BE1B24] cursor-pointer"
          />
          <label htmlFor="toggle-vehicle-wear" className="text-xs text-neutral-700 cursor-pointer select-none">
            {lang === 'fr'
              ? 'Inclure le barème d’usure véhicule (+0,12 €/km Michelin)'
              : 'Include vehicle wear rate (+0.12 €/km)'}
          </label>
        </div>
      </div>

      {/* Metrics Summary Grid */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
          <div className="flex items-center gap-2 text-neutral-500 text-xs mb-1">
            <Navigation className="w-4 h-4 text-blue-600" />
            <span>{lang === 'fr' ? 'Distance' : 'Distance'}</span>
          </div>
          <p className="text-xl font-bold text-neutral-900">{baseRoute.distance}</p>
          <span className="text-[11px] text-neutral-400">
            {baseRoute.scenicRating === 5 ? (lang === 'fr' ? '★ Route d’exception' : '★ Scenic highlight') : (lang === 'fr' ? 'Tracé direct' : 'Direct path')}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
          <div className="flex items-center gap-2 text-neutral-500 text-xs mb-1">
            <Clock className="w-4 h-4 text-amber-600" />
            <span>{lang === 'fr' ? 'Temps estimé' : 'Estimated Time'}</span>
          </div>
          <p className="text-xl font-bold text-neutral-900">{baseRoute.duration}</p>
          <span className="text-[11px] text-neutral-400">
            {lang === 'fr' ? 'Hors haltes repas' : 'Excluding meal stops'}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
          <div className="flex items-center gap-2 text-neutral-500 text-xs mb-1">
            <DollarSign className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'fr' ? 'Péages autoroutiers' : 'Highway Tolls'}</span>
          </div>
          <p className="text-xl font-bold text-neutral-900">
            {baseRoute.tollCost === 0 ? (
              <span className="text-emerald-700">{lang === 'fr' ? 'GRATUIT (0 €)' : 'FREE (0 €)'}</span>
            ) : (
              `${baseRoute.tollCost.toFixed(2)} €`
            )}
          </p>
          <span className="text-[11px] text-neutral-400">
            {baseRoute.tollCost > 0 ? (lang === 'fr' ? 'Barèmes APRR/ASF' : 'French highway tolls') : (lang === 'fr' ? '100% sans péage' : '100% toll-free')}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-[#BE1B24]/5 border border-[#BE1B24]/20">
          <div className="flex items-center gap-2 text-[#BE1B24] text-xs font-semibold mb-1">
            <Fuel className="w-4 h-4" />
            <span>{lang === 'fr' ? 'Coût Total Estimé' : 'Total Est. Cost'}</span>
          </div>
          <p className="text-2xl font-bold text-[#BE1B24]">{totalTripCost.toFixed(2)} €</p>
          <span className="text-[11px] text-neutral-600">
            {lang === 'fr' ? `Carburant : ${adjustedFuelCost} €` : `Fuel: ${adjustedFuelCost} €`}
            {vehicleWearCost > 0 && ` + Usure : ${vehicleWearCost} €`}
          </span>
        </div>
      </div>

      {/* Gourmet Stops along this route */}
      <div className="mt-6 pt-5 border-t border-neutral-100">
        <div className="flex items-center gap-2 mb-3 text-neutral-900 font-serif font-bold text-base">
          <Utensils className="w-4 h-4 text-[#BE1B24]" />
          <span>
            {lang === 'fr'
              ? 'Haltes Gastronomiques Étoilées Recommandées sur ce Tracé :'
              : 'Recommended Michelin Starred Stops on this Route:'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {currentPreset.gourmetStops.map((stop, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:bg-neutral-50 transition-colors"
            >
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#BE1B24] mb-1">
                <Award className="w-3.5 h-3.5" />
                <span>{stop.award}</span>
              </div>
              <p className="font-bold text-sm text-neutral-900">{stop.name}</p>
              <p className="text-xs text-neutral-500">{stop.city}</p>
              <p className="text-[11px] text-neutral-600 italic mt-1 border-t border-neutral-200/50 pt-1">
                « {stop.specialty} »
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
