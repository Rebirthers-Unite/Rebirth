require 'rails_helper'

RSpec.describe Survivor, type: :model do
  include Mongoid::Matchers

  let(:survivor) { described_class.create!(
    name: 'Jane Doe',
    date_of_birth: '1990-01-01',
    organization: 'Example Organization',
    organization_contact: 'John Smith',
    organization_email: 'example@example.com',
    guardian_name: 'Sara Smith',
    contact_of_guardian: '555-555-5555',
    level_of_education: 'High School',
    school: 'Example High School',
    children: 'None',
    social_asset_building: 'Volunteering',
    date_of_entry: '2020-01-01',
    date_of_exit: '2021-01-01'
  )}

  it 'is valid with all required fields' do
    expect(survivor).to be_valid
  end

  it 'is invalid without a name' do
    survivor.name = nil
    expect(survivor).not_to be_valid
  end

  it 'is invalid without a date of birth' do
    survivor.date_of_birth = nil
    expect(survivor).not_to be_valid
  end

  it 'is invalid without an organization' do
    survivor.organization = nil
    expect(survivor).not_to be_valid
  end

  it 'is invalid without an organization contact' do
    survivor.organization_contact = nil
    expect(survivor).not_to be_valid
  end

  it 'is invalid without an organization email' do
    survivor.organization_email = nil
    expect(survivor).not_to be_valid
  end

  it 'is invalid without a guardian name' do
    survivor.guardian_name = nil
    expect(survivor).not_to be_valid
  end

  it 'is invalid without a contact of guardian' do
    survivor.contact_of_guardian = nil
    expect(survivor).not_to be_valid
  end

  it 'is invalid without a level of education' do
    survivor.level_of_education = nil
    expect(survivor).not_to be_valid
  end

  it 'is invalid without a school' do
    survivor.school = nil
    expect(survivor).not_to be_valid
  end

  it 'is invalid without children information' do
    survivor.children = nil
    expect(survivor).not_to be_valid
  end

  it 'is invalid without social asset building information' do
    survivor.social_asset_building = nil
    expect(survivor).not_to be_valid
  end

  it 'is invalid without a date of entry' do
    survivor.date_of_entry = nil
    expect(survivor).not_to be_valid
  end

  it 'is invalid without a date of exit' do
    survivor.date_of_exit = nil
    expect(survivor).not_to be_valid
  end
end