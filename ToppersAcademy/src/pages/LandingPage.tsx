
import React from 'react';
import { Header } from '../components/Header';
import { CoursesLandingPage } from '../components/CoursesLandingPage';
import { WhyToppersAcademyWorks } from '../components/WhyToppersAcademyWorks';
import { TeachersSection } from '../components/TeachersSection';
import { LearnersSection } from '../components/LearnersSection';
import { TestimonialQuote } from '../components/TestimonialQuote';
import { GiveThemChance } from '../components/GiveThemChance';
import { JoinAcademy } from '../components/JoinAcademy';
import { KeySupporters } from '../components/KeySupporters';

const LandingPage: React.FC = () => {
  return (
    <>
      <Header/>
      <CoursesLandingPage/>
      <WhyToppersAcademyWorks/>
      <TeachersSection/>
      <LearnersSection/>
      <TestimonialQuote/>
      <GiveThemChance/>
      <JoinAcademy/>
      <KeySupporters/>
    </>
  );
};

export {LandingPage};
