import * as React from 'react'
import { Body, Container, Head, Heading, Hr, Html, Preview, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  email?: string
  company?: string
  message?: string
}

const ContactNotification = ({ name, email, company, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New website message from {name || 'a visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New contact form message</Heading>
        <Text style={label}>Name</Text>
        <Text style={value}>{name || '—'}</Text>
        <Text style={label}>Email</Text>
        <Text style={value}>{email || '—'}</Text>
        <Text style={label}>Company</Text>
        <Text style={value}>{company || '—'}</Text>
        <Hr style={hr} />
        <Text style={label}>Message</Text>
        <Text style={{ ...value, whiteSpace: 'pre-wrap' }}>{message || '—'}</Text>
        <Hr style={hr} />
        <Text style={footer}>Reply to this email to answer {name || 'the sender'} directly.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactNotification,
  subject: (d: Record<string, any>) => `New website message from ${d['name'] || 'a visitor'}`,
  displayName: 'Contact form → sales',
  to: 'sales@ammp.io',
  previewData: { name: 'Jane Doe', email: 'jane@example.com', company: 'Solar Co', message: 'We run 120 sites and want to learn about Ray.' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Inter, Arial, sans-serif' }
const container = { padding: '24px 28px', maxWidth: '560px' }
const h1 = { fontSize: '20px', fontWeight: 500, color: '#1a1a1a', margin: '0 0 20px' }
const label = { fontSize: '12px', color: '#6b6b6b', margin: '12px 0 2px', textTransform: 'uppercase' as const, letterSpacing: '0.04em' }
const value = { fontSize: '15px', color: '#1a1a1a', margin: 0, lineHeight: '1.5' }
const hr = { borderColor: '#eeeeee', margin: '20px 0' }
const footer = { fontSize: '13px', color: '#6b6b6b' }
