import { Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function MealPlans() {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
  
    return (
      <div>
          <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
          <KeyboardBackspaceIcon
            className="cursor-pointer"
            onClick={handleBack}
          />
          <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
            MEAL PLANS
          </h1>
        </section>
      </div>
      
    )
  }