import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Solicitação enviada! Nossa equipe comercial entrará em contato em breve.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          
          {/* Header */}


          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>

                

              </div>

              {/* Business Benefits */}

            </div>

            {/* Contact Form */}

          </div>
        </div>
      </div>
    </section>
  );
}