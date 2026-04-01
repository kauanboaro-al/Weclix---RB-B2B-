import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { MapPin, Phone, Clock } from 'lucide-react';

export function StoresMap() {
  const stores = [
    {
      city: "Ribeirão Preto",
      address: "Av. Pres. Vargas, 387 - Jardim America, Ribeirão Preto - SP, 14025-700",
      phone: "(16) 99156-3552",
      hours: "Seg - Sex: 8h às 18h | Sáb: 8h às 12h"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Nós Visite Presencialmente</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Store Card */}
            {stores.map((store, index) => (
              <div key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-white">
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <h3 className="text-xl mb-3 text-gray-900">{store.city}</h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {store.address}
                      </p>
                      <p className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        {store.phone}
                      </p>
                      <p className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {store.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="bg-gray-200 border-0 overflow-hidden relative rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.15213734308!2d-47.9735!3d-21.1775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bef5162f5db5%3A0x272551e2da2b14a!2sRibei%C3%A3o%20Preto%2C%20SP!5e0!3m2!1spt!2sbr!4v1640000000000!5m2!1spt!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
              <div className="absolute top-2 right-2">
                {/* Button removed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}