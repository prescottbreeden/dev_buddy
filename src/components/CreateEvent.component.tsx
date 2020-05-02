import React from 'react';
import DateInput from './DateInput.component';

const CreateEvent: React.FC = () => {
  return (
    <div className="create-event">
      <DateInput name="day" value={12} />
      <DateInput name="month" value={5} />
      <DateInput name="year" value={2020} />
      <button className="submit-btn">Create</button>
    </div>
  );
}

export default CreateEvent;
