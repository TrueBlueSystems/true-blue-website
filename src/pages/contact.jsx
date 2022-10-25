import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField, TextAreaField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

export default function Register() {
  return (
    <>
      <Head>
        <title>Get In Touch - True Blue Systems</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            True Blue Systems
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Get In Touch
            </h2>
            
          </div>
        </div>
        <form
          action="#"
          className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2"
          netlify
        >
          <TextField
            label="First name"
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            label="Last name"
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
          />
          <TextField
            className="col-span-full"
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextAreaField
            className="col-span-full"
            label="Message"
            id="message"
            name="message"
            type="textarea"
            required
          />
          <SelectField
            className="col-span-full"
            label="How did you hear about us?"
            id="referral_source"
            name="referral_source"
          >
            <option>Google search</option>
            <option>Friend of a friend</option>
            <option>Other</option>
          </SelectField>
          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
            >
              <span>
                Submit
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
