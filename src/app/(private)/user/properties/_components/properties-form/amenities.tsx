import { Button } from 'antd';
import { PropertiesFormStepProps } from '.';

const Amenities = ({
  currentStep,
  setCurrentStep,
}: PropertiesFormStepProps) => {
  return (
    <div>
      <span>Amenities</span>
      <div className="flex justify-end gap-5">
        <Button
          disabled={currentStep === 0}
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Back
        </Button>
        <Button type="primary" onClick={() => setCurrentStep(currentStep + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Amenities;
