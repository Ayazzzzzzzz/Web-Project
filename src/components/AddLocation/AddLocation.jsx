import React from "react";
import { useForm } from "@mantine/form";
import useCountries from "../../hooks/useCountries";
import { Button, Group, Select, TextInput } from "@mantine/core";
import Map from "../Map/Map";

const validateString = (value) => (value ? null : 'This field is required');

const AddLocation = ({ propertyDetails, setPropertyDetails, nextStep }) => {
  const { getAll } = useCountries();
  const form = useForm({
    initialValues: {
      country: propertyDetails?.country || '',
      city: propertyDetails?.city || '',
      address: propertyDetails?.address || '',
    },
    validate: {
      country: validateString,
      city: validateString,
      address: validateString,
    },
  });

  const { country, city, address } = form.values;

  const handleSubmit = () => {
    const errors = form.validate();
    if (!errors.hasErrors) {
      setPropertyDetails((prev) => ({ ...prev, country, city, address }));
      nextStep();
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div
        className="flexCenter"
        style={{
          justifyContent: "space-between",
          gap: "3rem",
          marginTop: "3rem",
          flexDirection: "row",
        }}
      >
        {/* left side */}
        {/* inputs */}
        <div className="flexColStart" style={{ flex: 1, gap: "1rem" }}>
          <Select
            w={"100%"}
            withAsterisk
            label="Country"
            clearable
            searchable
            data={getAll()}
            {...form.getInputProps("country")}
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="City"
            {...form.getInputProps("city")}
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="Address"
            {...form.getInputProps("address")}
          />
        </div>

        {/* right side */}
        <div style={{ flex: 1 }}>
          <Map address={address} city={city} country={country} />
        </div>
      </div>
      <Group position="center" mt={"xl"}>
        <Button type="submit">Next Step</Button>
      </Group>
    </form>
  );
};

export default AddLocation;
