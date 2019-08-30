import React from "react"
import { Formik, Form } from "formik"

import InputGroup from "../common/InputGroup"
import Select from "../common/Select"
import Button from "../styled/Button.css.js"
import Input from "../styled/TextInput.css.js"
import Textarea from "../styled/Textarea.css.js"

import { validationSchema, options, initialValues } from "../../helper/form"

export default ({ onFormSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        onFormSubmit(values, setSubmitting)
      }}
    >
      {({ isSubmitting, values, handleChange, handleBlur }) => (
        <Form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <InputGroup
            label="Full Name"
            error={{ name: "name", component: "div" }}
          >
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="name"
              value={values.name}
              placeholder="Jon Doe"
            />
          </InputGroup>

          <InputGroup label="Email" error={{ name: "email", component: "div" }}>
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              name="email"
              value={values.email}
              placeholder="jondoe@email.com"
            />
          </InputGroup>

          <InputGroup
            label="Location"
            error={{ name: "location", component: "div" }}
          >
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="location"
              value={values.location}
              placeholder="Los Angeles, California"
            />
          </InputGroup>

          <InputGroup
            label="Phone Number"
            error={{ name: "phone", component: "div" }}
          >
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="phone"
              value={values.phone}
              placeholder="+x xxx xxx xxxx"
            />
          </InputGroup>

          <InputGroup
            label="Subject"
            error={{ name: "subject", component: "div" }}
          >
            <Select
              name="subject"
              value={values.subject}
              options={options}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </InputGroup>

          <InputGroup
            label="Additional Information"
            error={{ name: "message", component: "div" }}
          >
            <Textarea
              onChange={handleChange}
              onBlur={handleBlur}
              name="message"
              value={values.message}
              placeholder="Message"
            />
          </InputGroup>

          <Button block type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </Form>
      )}
    </Formik>
  )
}
