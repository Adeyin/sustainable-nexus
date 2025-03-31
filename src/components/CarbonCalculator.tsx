
import React, { useState } from 'react';
import { Calculator, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CarbonCalculator = () => {
  const [formData, setFormData] = useState({
    transportation: '0',
    electricity: '0',
    diet: 'mixed',
    flights: '0'
  });
  
  const [result, setResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateFootprint = () => {
    // Simple calculation for demonstration
    const transportation = parseFloat(formData.transportation) * 0.42; // kg CO2 per mile
    const electricity = parseFloat(formData.electricity) * 0.92; // kg CO2 per kWh
    
    let dietFactor = 0;
    switch(formData.diet) {
      case 'vegan':
        dietFactor = 1.5;
        break;
      case 'vegetarian':
        dietFactor = 2.5;
        break;
      case 'mixed':
        dietFactor = 3.5;
        break;
      case 'high-meat':
        dietFactor = 7.0;
        break;
      default:
        dietFactor = 3.5;
    }
    
    const flights = parseFloat(formData.flights) * 1100; // kg CO2 per flight (average)
    
    const totalFootprint = transportation + electricity + (dietFactor * 365) + flights;
    setResult(Math.round(totalFootprint / 1000)); // Convert to metric tons
    setShowResult(true);
  };

  return (
    <div id="calculator" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-eco-dark mb-4">Carbon Footprint Calculator</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estimate your annual carbon footprint based on your lifestyle choices. This basic calculator provides a starting point for understanding your environmental impact.
            </p>
          </div>
          
          <div className="bg-eco-ultralight rounded-xl p-6 md:p-8 shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <label htmlFor="transportation" className="block text-sm font-medium text-gray-700">
                      Transportation (miles/week)
                    </label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="ml-2 text-gray-400 hover:text-gray-600">
                            <Info className="h-4 w-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-60">
                            Enter the average miles you drive per week in a gas-powered vehicle.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <input
                    type="number"
                    id="transportation"
                    name="transportation"
                    value={formData.transportation}
                    onChange={handleChange}
                    className="input-eco w-full"
                    min="0"
                  />
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <label htmlFor="electricity" className="block text-sm font-medium text-gray-700">
                      Electricity (kWh/month)
                    </label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="ml-2 text-gray-400 hover:text-gray-600">
                            <Info className="h-4 w-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-60">
                            Check your electricity bill for monthly usage in kilowatt-hours (kWh).
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <input
                    type="number"
                    id="electricity"
                    name="electricity"
                    value={formData.electricity}
                    onChange={handleChange}
                    className="input-eco w-full"
                    min="0"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <label htmlFor="diet" className="block text-sm font-medium text-gray-700">
                      Diet Type
                    </label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="ml-2 text-gray-400 hover:text-gray-600">
                            <Info className="h-4 w-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-60">
                            Different diets have varying carbon footprints due to production methods and supply chains.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <select
                    id="diet"
                    name="diet"
                    value={formData.diet}
                    onChange={handleChange}
                    className="input-eco w-full"
                  >
                    <option value="vegan">Vegan</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="mixed">Mixed/Balanced</option>
                    <option value="high-meat">High Meat Consumption</option>
                  </select>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <label htmlFor="flights" className="block text-sm font-medium text-gray-700">
                      Flights Per Year
                    </label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="ml-2 text-gray-400 hover:text-gray-600">
                            <Info className="h-4 w-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-60">
                            Count the number of one-way flights you take in a year.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <input
                    type="number"
                    id="flights"
                    name="flights"
                    value={formData.flights}
                    onChange={handleChange}
                    className="input-eco w-full"
                    min="0"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button 
                className="btn-eco-primary px-8 py-2 text-base flex items-center gap-2"
                onClick={calculateFootprint}
              >
                <Calculator className="h-5 w-5" />
                Calculate My Footprint
              </Button>
            </div>
            
            {showResult && (
              <div className="mt-8 text-center p-6 bg-white rounded-lg border border-eco-light animate-fade-in">
                <h3 className="text-2xl font-semibold text-eco-dark mb-2">Your Estimated Carbon Footprint</h3>
                <p className="text-4xl font-bold text-eco-medium mb-2">
                  {result} <span className="text-xl font-normal">metric tons CO₂e/year</span>
                </p>
                <p className="text-gray-600">
                  The global average is approximately 4 metric tons per person annually.
                </p>
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" className="btn-eco-outline">
                    See Detailed Breakdown
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              This is a simplified calculator for educational purposes. For a more comprehensive assessment, 
              try our <a href="#" className="text-eco-medium hover:underline">advanced calculator</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonCalculator;
