import { Button, Form, Input, InputNumber, Select } from 'antd';
import { PropertiesFormStepProps } from '.';
import { propertyStatus, propertyTypes } from '@/constants';

const Basic = ({
  currentStep,
  setCurrentStep,
  finalValues,
  setFinalValues,
}: PropertiesFormStepProps) => {
  const onFinish = (values: any) => {
    setFinalValues({ ...finalValues, basic: values });
    setCurrentStep(currentStep + 1);
  };

  return (
    <Form
      onFinish={onFinish}
      layout="vertical"
      initialValues={finalValues.basic}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <Form.Item
          className="col-span-1 lg:col-span-3"
          name="name"
          label="Property Name"
          rules={[
            { required: true, message: "Please fill the property's name!" },
          ]}
        >
          <Input placeholder="Property Name" />
        </Form.Item>

        <Form.Item
          className="col-span-1 lg:col-span-3"
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please write a description!' }]}
        >
          <Input.TextArea rows={5} placeholder="Description" />
        </Form.Item>
        <Form.Item
          name="type"
          label="Type"
          rules={[{ required: true, message: 'Please especify a type!' }]}
        >
          <Select options={propertyTypes} />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: 'Please especify a status!' }]}
        >
          <Select options={propertyStatus} />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: 'Please especify a price!' }]}
        >
          <InputNumber className="w-full" type="number" placeholder="Price" />
        </Form.Item>
      </div>

      <div className="flex justify-end gap-5 mt-7">
        <Button
          disabled={currentStep === 0}
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Back
        </Button>
        <Button
          htmlType="submit"
          type="primary"
          //   onClick={() => setCurrentStep(currentStep + 1)}
        >
          Next
        </Button>
      </div>
    </Form>
  );
};

export default Basic;
