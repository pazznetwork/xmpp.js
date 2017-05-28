'use strict'

const test = require('ava')
const streamfeatures = require('../stream-features')
const xml = require('@xmpp/xml')

test.skip('selectFeature', t => {
  const features = []
  features.push({
    priority: 1000,
    run: () => {},
    match: el => el.getChild('bind'),
  })
  features.push({
    priority: 2000,
    run: () => {},
    match: el => el.getChild('bind'),
  })

  const feature = streamfeatures.selectFeature(features, xml`<foo><bind/></foo>`)
  t.is(feature.priority, 2000)
})
