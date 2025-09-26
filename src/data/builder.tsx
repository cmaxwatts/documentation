export default {
  title: "Form Builder",
  description: "GUI for building forms with validation",
  builder: {
    title: "Form Builder",
    description: "Build your form with code and example.",
  },
  layout: {
    title: "Layout",
    message: "You can start adding fields with Input Creator.",
  },
  inputCreator: {
    title: "Input Creator",
    description: `This form allows you to create and update inputs. The Generate Form button will create a new form with the updates.`,
    message: "You can start adding fields with Input Creator.",
    options: "Options",
    validation: "Show validation",
    generate: "Generate Form",
  },
  code: {
    title: "Code",
    description: `As you are making changes over the form, the code section will be updated and you can copy the code as well.`,
  },
}

import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Business Name" {...register("Business Name", {required: true})} />
      <input type="text" placeholder="HQ Address" {...register} />
      <input type="text" placeholder="Primary Contact" {...register} />
      <input type="text" placeholder="Name" {...register} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Phone Number" {...register("Phone Number", {required: true})} />
      <input type="text" placeholder="Who Approves Budget?" {...register} />
      <input type="text" placeholder="Who Approves Creatives?" {...register} />
      <select {...register("Time Zone")}>
        <option value="Pacific">Pacific</option>
        <option value="Mountain">Mountain</option>
        <option value="Eastern">Eastern</option>
      </select>
      <input type="url" placeholder="Equipment Prices" {...register} />
      <input type="text" placeholder="Competitors" {...register} />
      <input type="checkbox" placeholder="Provided Services" {...register} />
      <input type="checkbox" placeholder="Services To Exclude" {...register} />
      <input type="range" placeholder="Hours Of Operation" {...register} />
      <input type="text" placeholder="What is your average revenue per job on New equipment sales?" {...register} />
      <input type="text" placeholder="What is your average revenue per job on Repair?" {...register} />
      <input type="text" placeholder="What is your target cost of marketing?" {...register} />
      <input type="number" placeholder="How full is your schedule in a typical month (%)?" {...register} />
      <input type="number" placeholder="Current # of Repair Techs" {...register} />
      <input type="number" placeholder="Current # of Sales People" {...register} />
      <input type="number" placeholder="Current # of Trucks" {...register} />
      <input type="number" placeholder="Last Year's Revenue" {...register} />
      <input type="number" placeholder="Next 12 Months Revenue Goal" {...register} />
      <input type="text" placeholder="Which days and times are you open each week? " {...register} />
      <input type="url" placeholder="Branded Kit" {...register} />
      <input type="url" placeholder="Logos" {...register} />
      <input type="url" placeholder="Images" {...register} />
      <input type="url" placeholder="Videos" {...register} />
      <input type="url" placeholder="Profitfill License" {...register} />
      <input type="url" placeholder="MNDA" {...register} />
      <input type="text" placeholder="Credit Card Authorization" {...register} />
      <input type="text" placeholder="What is a guarantee or promise you stand behind when it comes to customer service?" {...register} />
      <input type="text" placeholder="What is the reason a home owner would hire you over your competitors?" {...register} />
      <input type="text" placeholder="Do you have a tagline, slogan or branded saying?" {...register} />
      <input type="text" placeholder="Is there any thing you do differently or better that we can showcase in an ad?" {...register} />
      <input type="text" placeholder="Is there anything else we should know about your brand?" {...register} />
      <input type="text" placeholder="Main Competitor" {...register} />
      <input type="url" placeholder="Link To Competitors Website" {...register} />
      <input type="checkbox" placeholder="Would you like us to build you a microsite?" {...register} />
      <select {...register("What CRM are you using?")}>
        <option value="Service Titan">Service Titan</option>
        <option value="Other">Other</option>
      </select>
      <input type="text" placeholder="What Email Communication Tool Do You Use?" {...register} />
      <select {...register("Does your website have call tracking (DNI) set up?")}>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <select {...register("Is it possible to replace it with ProfitFill’s tracking?")}>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <input type="email" placeholder="Which CSR email will receive new lead notifications?" {...register} />
      <input type="email" placeholder="Which CSR email will send confirmation to client?" {...register} />
      <input type="text" placeholder="What Ad platforms are you using?" {...register} />
      <input type="text" placeholder="What Ads Platforms do you want us you use?" {...register} />
      <input type="text" placeholder="Where do you want to target ads?" {...register} />
      <input type="range" placeholder="Preferred days and times to run ads" {...register} />
      <select {...register("What Business Units would you like to advertise?")}>
        <option value="HVAC">HVAC</option>
        <option value="Plumbing">Plumbing</option>
        <option value="Garage Door Services">Garage Door Services</option>
        <option value="Other">Other</option>
      </select>
      <input type="text" placeholder="Any search terms you would like us to exclude from paid ads?" {...register} />
      <input type="text" placeholder="Any locations you would like us to exclude from paid ads?" {...register} />

      <input type="submit" />
    </form>
  );
}
