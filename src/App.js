import React from "react";
// import React, { useState } from "react";
// import DarkModeToggle from "react-dark-mode-toggle";

import "./App.css";
import { actions, StateProvider, loadingState } from "./state";
import { ChakraProvider, Box, VStack, StackDivider } from "@chakra-ui/react";
// import {
//   Redirect,
//   Route,
//   Switch,
//   BrowserRouter as Router,
// } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import AuthenticationForm1 from "./components/authenticationForm1";
import Drawer1 from "./components/drawer1";
import Drawer2 from "./components/drawer2";
import Drawer3 from "./components/drawer3";
import Drawer4 from "./components/drawer4";
import FeedbackLayout1 from "./components/feedbackLayout1";
import FeedbackLayout4 from "./components/feedbackLayout4";
import Footer6 from "./components/footer6";
import FormInDrawerApp from "./components/formInDrawerApp";
import FormLayout1 from "./components/formLayout1";
import FormLayout14 from "./components/formLayout14";
import FormLayout15 from "./components/formLayout15";
import FormLayout16 from "./components/formLayout16";
import FormLayout2 from "./components/formLayout2";
import FormLayout4 from "./components/formLayout4";
import FormLayout5 from "./components/formLayout5";
import Header1 from "./components/header1";
import Header2 from "./components/header2";
import Hero1 from "./components/hero1";
import Links1 from "./components/links1";
import MenuLayout3 from "./components/menuLayout3";
import Popover7 from "./components/popover7";
import Subscribe1 from "./components/subscribe1";
import Tabs8 from "./components/tabs8";
import Toast from "./components/toast";
import Web3ContextProvider from "./libs/Web3Context";

// IGNORE THESE FOR NOW vvvv
// import Accordian1 from "./components/accordian1";
// import Accordian2 from "./components/accordian2";
// import Accordian3 from "./components/accordian3";
// import Accordian4 from "./components/accordian4";
// import Accordian5 from "./components/accordian5";
// import AuthenticationForm10 from "./components/authenticationForm10";
// import AuthenticationForm2 from "./components/authenticationForm2";
// import AuthenticationForm3 from "./components/authenticationForm3";
// import AuthenticationForm4 from "./components/authenticationForm4";
// import AuthenticationForm5 from "./components/authenticationForm5";
// import AuthenticationForm6 from "./components/authenticationForm6";
// import AuthenticationForm7 from "./components/authenticationForm7";
// import AuthenticationForm8 from "./components/authenticationForm8";
// import AuthenticationForm9 from "./components/authenticationForm9";
// import Blog1 from "./components/blog1";
// import Blog2 from "./components/blog2";
// import Blog3 from './components/blog3';
// import Blog4 from './components/blog4';
// import Blog5 from './components/blog5';
// import Breadcrumb1 from "./components/breadcrumb1";
// import Breadcrumb2 from "./components/breadcrumb2";
// import Breadcrumb3 from "./components/breadcrumb3";
// import Breadcrumb4 from "./components/breadcrumb4";
// import Breadcrumb5 from "./components/breadcrumb5";
// import ButtonsBar1 from "./components/buttonsBar1";
// import ButtonsBar2 from "./components/buttonsBar2";
// import ButtonsBar3 from "./components/buttonsBar3";
// import ButtonsBar4 from "./components/buttonsBar4";
// import ButtonsBar5 from "./components/buttonsBar5";
// import CardContact1 from "./components/cardContact1";
// import CardContact2 from "./components/cardContact2";
// import CardService1 from "./components/cardService1";
// import CardService2 from "./components/cardService2";
// import CardService3 from "./components/cardService3";
// import CardTextPost from "./components/cardTextPost";
// import ContentText1 from "./components/contentText1";
// import ContentText10 from "./components/contentText10";
// import ContentText2 from "./components/contentText2";
// import ContentText3 from "./components/contentText3";
// import ContentText4 from "./components/contentText4";
// import ContentText5 from "./components/contentText5";
// import ContentText6 from "./components/contentText6";
// import ContentText7 from "./components/contentText7";
// import ContentText8 from "./components/contentText8";
// import ContentText9 from "./components/contentText9";
// import CustomControls from "./components/customControls";
// import DatabaseForm from "./components/databaseForm";
// import DatabaseLocal from "./components/databaseLocal";
// import DonutFooter from "./components/donutFooter";
// import DonutFooter2 from "./components/donutFooter2";
// import Drawer5 from "./components/drawer5";
// import Feature1 from "./components/feature1";
// import Feature2 from "./components/feature2";
// import Feature3 from "./components/feature3";
// import Feature4 from "./components/feature4";
// import Feature5 from "./components/feature5";
// import FeedbackLayout10 from "./components/feedbackLayout10";
// import FeedbackLayout2 from "./components/feedbackLayout2";
// import FeedbackLayout3 from "./components/feedbackLayout3";
// import FeedbackLayout5 from "./components/feedbackLayout5";
// import FeedbackLayout6 from "./components/feedbackLayout6";
// import FeedbackLayout7 from "./components/feedbackLayout7";
// import FeedbackLayout8 from "./components/feedbackLayout8";
// import FeedbackLayout9 from "./components/feedbackLayout9";
// import Filters from "./components/filters";
// import Footer from "./components/footer";
// import Footer1 from "./components/footer1";
// import Footer10 from "./components/footer10";
// import Footer2 from "./components/footer2";
// import Footer3 from "./components/footer3";
// import Footer4 from "./components/footer4";
// import Footer5 from "./components/footer5";
// import Footer7 from "./components/footer7";
// import Footer8 from "./components/footer8";
// import Footer9 from "./components/footer9";
// import FormLayout10 from "./components/formLayout10";
// import FormLayout11 from "./components/formLayout11";
// import FormLayout12 from "./components/formLayout12";
// import FormLayout13 from "./components/formLayout13";
// import FormLayout17 from "./components/formLayout17";
// import FormLayout18 from "./components/formLayout18";
// import FormLayout19 from "./components/formLayout19";
// import FormLayout20 from "./components/formLayout20";
// import FormLayout3 from "./components/formLayout3";
// import FormLayout6 from "./components/formLayout6";
// import FormLayout7 from "./components/formLayout7";
// import FormLayout8 from "./components/formLayout8";
// import FormLayout9 from "./components/formLayout9";
// import FormPasswordInput from "./components/formPasswordInput";
// import GridLayout1 from "./components/gridLayout1";
// import GridLayout10 from "./components/gridLayout10";
// import GridLayout11 from "./components/gridLayout11";
// import GridLayout2 from "./components/gridLayout2";
// import GridLayout3 from "./components/gridLayout3";
// import GridLayout4 from "./components/gridLayout4";
// import GridLayout5 from "./components/gridLayout5";
// import GridLayout6 from "./components/gridLayout6";
// import GridLayout7 from "./components/gridLayout7";
// import GridLayout8 from "./components/gridLayout8";
// import GridLayout9 from "./components/gridLayout9";
// import Header from "./components/header";
// import Header0 from "./components/header0";
// import Header3 from "./components/header3";
// import Hero2 from "./components/hero2";
// import Hero3 from "./components/hero3";
// import Hero4 from "./components/hero4";
// import Hero5 from "./components/hero5";
// import HookAnimated from "./components/hookAnimated";
// import HookBoolean from "./components/hookBoolean";
// import HookBoolean1 from "./components/hookBoolean1";
// import HookBreakpoint from "./components/hookBreakpoint";
// import HookClipboard from "./components/hookClipboard";
// import HookControllable from "./components/hookControllable";
// import HookDesignToken from "./components/hookDesignToken";
// import HookDrawer from "./components/hookDrawer";
// import HookMergeRef from "./components/hookMergeRef";
// import HookModal from "./components/hookModal";
// import HookMotionPref from "./components/hookMotionPref";
// import HookScreenSizeQuery from "./components/hookScreenSizeQuery";
// import IconsChakraUI from "./components/iconsChakraUI";
// import IconsFontAwesome1 from "./components/iconsFontAwesome1";
// import IconsFontAwesome2 from "./components/iconsFontAwesome2";
// import IconsFontAwesome3 from "./components/iconsFontAwesome3";
// import IconsFontAwesomeEmotions from "./components/iconsFontAwesomeEmotions";
// import IconsMoon from "./components/iconsMoon";
// import IconsWeather from "./components/iconsWeather";
// import Images1 from "./components/images1";
// import LinkOverlay from "./components/linkOverlay";
// import MenuLayout1 from "./components/menuLayout1";
// import MenuLayout10 from "./components/menuLayout10";
// import MenuLayout2 from "./components/menuLayout2";
// import MenuLayout4 from "./components/menuLayout4";
// import MenuLayout5 from "./components/menuLayout5";
// import MenuLayout6 from "./components/menuLayout6";
// import MenuLayout7 from "./components/menuLayout7";
// import MenuLayout8 from "./components/menuLayout8";
// import MenuLayout9 from "./components/menuLayout9";
// import ModalLayout1 from "./components/modalLayout1";
// import ModalLayout10 from "./components/modalLayout10";
// import ModalLayout2 from "./components/modalLayout2";
// import ModalLayout3 from "./components/modalLayout3";
// import ModalLayout4 from "./components/modalLayout4";
// import ModalLayout5 from "./components/modalLayout5";
// import ModalLayout6 from "./components/modalLayout6";
// import ModalLayout7 from "./components/modalLayout7";
// import ModalLayout8 from "./components/modalLayout8";
// import ModalLayout9 from "./components/modalLayout9";
// import Popover1 from "./components/popover1";
// import Popover10 from "./components/popover10";
// import Popover2 from "./components/popover2";
// import Popover3 from "./components/popover3";
// import Popover4 from './components/popover4';
// import Popover5 from "./components/popover5";
// import Popover6 from "./components/popover6";
// import Popover8 from "./components/popover8";
// import Popover9 from "./components/popover9";
// import PopoverForm from './components/popoverForm';
// import Pricing1 from "./components/pricing1";
// import Pricing2 from './components/pricing2';
// import Pricing3 from './components/pricing3';
// import Pricing4 from './components/pricing4';
// import Pricing5 from './components/pricing5';
// import ProfileLayout1 from "./components/profileLayout1";
// import ProfileLayout2 from "./components/profileLayout2";
// import ProfileLayout3 from "./components/profileLayout3";
// import ProfileLayout4 from "./components/profileLayout4";
// import ProfileLayout5 from "./components/profileLayout5";
// import Sidebar1 from './components/sidebar1';
// import Sidebar2 from './components/sidebar2';
// import SigninButton from "./components/signinButton";
// import SigninButtons from "./components/signinButtons";
// import Statistics1 from "./components/statistics1";
// import Statistics2 from "./components/statistics2";
// import Statistics3 from './components/statistics3';
// import Statistics4 from './components/statistics4';
// import Statistics5 from './components/statistics5';
// import Subscribe2 from './components/subscribe2';
// import Tabs1 from "./components/tabs1";
// import Tabs10 from "./components/tabs10";
// import Tabs11 from "./components/tabs11";
// import Tabs2 from "./components/tabs2";
// import Tabs3 from "./components/tabs3";
// import Tabs4 from "./components/tabs4";
// import Tabs5 from "./components/tabs5";
// import Tabs6 from "./components/tabs6";
// import Tabs7 from "./components/tabs7";
// import Tabs9 from "./components/tabs9";
// import Testimonial1 from "./components/testimonial1";
// import Testimonial2 from "./components/testimonial2";
// import Testimonial3 from "./components/testimonial3";
// import Testimonial4 from "./components/testimonial4";
// import Testimonial5 from "./components/testimonial5";
// import Tooltips1 from "./components/tooltips1";
// import Transitions1 from "./components/transitions1";
// import Transitions2 from "./components/transitions2";
// import Transitions3 from "./components/transitions3";
// import Transitions4 from "./components/transitions4";
// import Transitions5 from "./components/transitions5";
// import VisuallyHidden from "./components/visuallyHidden";
// IGNORE THESE FOR NOW ^^^^^

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(() => false);
  const initialState = {
    user: null,
    db: null,
    entries: [],
    dbGuide: null,
    entriesGuide: [],
    dbDAGtest: null,
    entriesDAGtest: [],
    dbUsers: null,
    entriesUsers: [],
    programs: [],
    orbitdbStatus: "Starting",
    ipfsStatus: "Starting",
    program: false,
    loading: {
      programs: false,
    },
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case actions.USER.SET_USER:
        return {
          ...state,
          user: action.publicKey,
        };
      case actions.SYSTEMS.SET_ORBITDB:
        return {
          ...state,
          orbitdbStatus: action.orbitdbStatus,
        };
      case actions.SYSTEMS.SET_IPFS:
        return {
          ...state,
          ipfsStatus: action.ipfsStatus,
        };
      case actions.DB.SET_DB:
        return {
          ...state,
          db: action.db,
          entries: action.entries,
        };
      case actions.DBGUIDE.SET_DBGUIDE:
        return {
          ...state,
          dbGuide: action.db,
          entriesGuide: action.entries,
        };
      case actions.DBDAGTEST.SET_DBDAGTEST:
        return {
          ...state,
          dbDAGtest: action.db,
          entriesDAGtest: action.entries,
        };
      case actions.DBUSERS.SET_DBUSERS:
        return {
          ...state,
          dbUsers: action.db,
          entriesUsers: action.entries,
        };
      case actions.PROGRAMS.SET_PROGRAM:
        return {
          ...state,
          program: action.program,
        };
      case actions.PROGRAMS.SET_PROGRAM_LOADING:
        return {
          ...state,
          program: loadingState,
        };
      case actions.PROGRAMS.SET_PROGRAMS:
        return {
          ...state,
          programs: action.programs,
        };
      case actions.PROGRAMS.SET_PROGRAMS_LOADING:
        return {
          ...state,
          loading: { ...state.loading, programs: action.loading },
        };
      default:
        return state;
    }
  };
  // ipfs-http-client for (Electron) desktop app?
  // Errors and bugs:
  // db.iterator({ limit: -1 }).collect() says its not a function when empty

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <ChakraProvider>
        <Web3ContextProvider>
          <Box backgroundColor="#303030" color="white">
            <Router>
              <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
                align="stretch"
              >

                <Header1 w="100%" />
                <MenuLayout3 w="100%" />
                <Hero1 w="100%" />
                <AuthenticationForm1 w="100%" />
                <FormInDrawerApp w="100%" />
                <Links1 w="100%" />
                <Drawer3 w="100%" />
                <FormLayout4 w="100%" />
                <FormLayout2 w="100%" />
                <FormLayout1 w="100%" />
                <FormLayout5 w="100%" />
                <FormLayout16 w="100%" />
                <FormLayout14 w="100%" />
                <Drawer4 w="100%" />
                <Tabs8 w="100%" />
                <FeedbackLayout4 w="100%" />
                <FormLayout15 w="100%" />
                <Drawer2 w="100%" />
                <Drawer1 w="100%" />
                <FeedbackLayout1 w="100%" />
                <Popover7 w="100%" />
                <Subscribe1 w="100%" />
                <Header2 w="100%" />
                <Footer6 w="100%" />

                {/* <Switch>
                <Route
                exact
                path="/sharedDatabases"
                component={DatabaseForm}
                />
                <Route
                exact
                path="/localDatabases"
                component={DatabaseLocal}
                />
                <Route path="/" component={Filters} />
                <Redirect to="/" />
                </Switch> */}

                <br />
                <Toast w="100%" />
                <br />

                <hr />
              </VStack>
            </Router>

            {/* <Box>
              <DarkModeToggle
                align="center"
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={80}
              />
            </Box> */}
          </Box>

          {/* <Accordian1 w="100%" /> */}
          {/* <Accordian2 w="100%" /> */}
          {/* <Accordian3 w="100%" /> */}
          {/* <Accordian4 w="100%" /> */}
          {/* <Accordian5 w="100%" /> */}
          {/* <AuthenticationForm10 w="100%" /> */}
          {/* <AuthenticationForm2 w="100%" /> */}
          {/* <AuthenticationForm3 w="100%" /> */}
          {/* <AuthenticationForm4 w="100%" /> */}
          {/* <AuthenticationForm5 w="100%" /> */}
          {/* <AuthenticationForm6 w="100%" /> */}
          {/* <AuthenticationForm7 w="100%" /> */}
          {/* <AuthenticationForm8 w="100%" /> */}
          {/* <AuthenticationForm9 w="100%" /> */}
          {/* <Blog1 w="100%" /> */}
          {/* <Blog2 w="100%" /> */}
          {/* <Blog3 w='100%'/> */}
          {/* <Blog4 w='100%'/> */}
          {/* <Blog5 w='100%'/> */}
          {/* <Breadcrumb1 w="100%" /> */}
          {/* <Breadcrumb2 w="100%" /> */}
          {/* <Breadcrumb3 w="100%" /> */}
          {/* <Breadcrumb4 w="100%" /> */}
          {/* <Breadcrumb5 w="100%" /> */}
          {/* <ButtonsBar1 w="100%" /> */}
          {/* <ButtonsBar2 w="100%" /> */}
          {/* <ButtonsBar3 w="100%" /> */}
          {/* <ButtonsBar4 w="100%" /> */}
          {/* <ButtonsBar5 w="100%" /> */}
          {/* <CardContact1 w="100%" /> */}
          {/* <CardContact2 w="100%" /> */}
          {/* <CardService1 w="100%" /> */}
          {/* <CardService2 w="100%" /> */}
          {/* <CardService3 w="100%" /> */}
          {/* <CardTextPost w="100%" /> */}
          {/* <ContentText1 w="100%" /> */}
          {/* <ContentText10 w="100%" /> */}
          {/* <ContentText2 w="100%" /> */}
          {/* <ContentText3 w="100%" /> */}
          {/* <ContentText4 w="100%" /> */}
          {/* <ContentText5 w="100%" /> */}
          {/* <ContentText6 w="100%" /> */}
          {/* <ContentText7 w="100%" /> */}
          {/* <ContentText8 w="100%" /> */}
          {/* <ContentText9 w="100%" /> */}
          {/* <CustomControls w="100%" /> */}
          {/* <DonutFooter w="100%" /> */}
          {/* <DonutFooter2 w="100%" /> */}
          {/* <Drawer5 w="100%" /> */}
          {/* <Feature1 w="100%" /> */}
          {/* <Feature2 w="100%" /> */}
          {/* <Feature3 w="100%" /> */}
          {/* <Feature4 w="100%" /> */}
          {/* <Feature5 w="100%" /> */}
          {/* <FeedbackLayout10 w="100%" /> */}
          {/* <FeedbackLayout2 w="100%" /> */}
          {/* <FeedbackLayout3 w="100%" /> */}
          {/* <FeedbackLayout5 w="100%" /> */}
          {/* <FeedbackLayout6 w="100%" /> */}
          {/* <FeedbackLayout7 w="100%" /> */}
          {/* <FeedbackLayout8 w="100%" /> */}
          {/* <FeedbackLayout9 w="100%" /> */}
          {/* <Footer w="100%" /> */}
          {/* <Footer1 w="100%" /> */}
          {/* <Footer10 w="100%" /> */}
          {/* <Footer2 w="100%" /> */}
          {/* <Footer3 w="100%" /> */}
          {/* <Footer4 w="100%" /> */}
          {/* <Footer5 w="100%" /> */}
          {/* <Footer7 w="100%" /> */}
          {/* <Footer8 w="100%" /> */}
          {/* <Footer9 w="100%" /> */}
          {/* <FormLayout10 w="100%" /> */}
          {/* <FormLayout11 w="100%" /> */}
          {/* <FormLayout12 w="100%" /> */}
          {/* <FormLayout13 w="100%" /> */}
          {/* <FormLayout17 w="100%" /> */}
          {/* <FormLayout18 w="100%" /> */}
          {/* <FormLayout19 w="100%" /> */}
          {/* <FormLayout20 w="100%" /> */}
          {/* <FormLayout3 w="100%" /> */}
          {/* <FormLayout6 w="100%" /> */}
          {/* <FormLayout7 w="100%" /> */}
          {/* <FormLayout8 w="100%" /> */}
          {/* <FormLayout9 w="100%" /> */}
          {/* <FormPasswordInput w="100%" /> */}
          {/* <GridLayout1 w="100%" /> */}
          {/* <GridLayout10 w="100%" /> */}
          {/* <GridLayout11 w="100%" /> */}
          {/* <GridLayout2 w="100%" /> */}
          {/* <GridLayout3 w="100%" /> */}
          {/* <GridLayout4 w="100%" /> */}
          {/* <GridLayout5 w="100%" /> */}
          {/* <GridLayout6 w="100%" /> */}
          {/* <GridLayout7 w="100%" /> */}
          {/* <GridLayout8 w="100%" /> */}
          {/* <GridLayout9 w="100%" /> */}
          {/* <Header w="100%" /> */}
          {/* <Header0 w="100%" /> */}
          {/* <Header3 w="100%" /> */}
          {/* <Hero2 w="100%" /> */}
          {/* <Hero3 w="100%" /> */}
          {/* <Hero4 w="100%" /> */}
          {/* <Hero5 w="100%" /> */}
          {/* <HookAnimated w="100%" /> */}
          {/* <HookBoolean w="100%" /> */}
          {/* <HookBoolean1 w="100%" /> */}
          {/* <HookBreakpoint w="100%" /> */}
          {/* <HookClipboard w="100%" /> */}
          {/* <HookControllable w="100%" /> */}
          {/* <HookDesignToken w="100%" /> */}
          {/* <HookDrawer w="100%" /> */}
          {/* <HookMergeRef w="100%" /> */}
          {/* <HookModal w="100%" /> */}
          {/* <HookMotionPref w="100%" /> */}
          {/* <HookScreenSizeQuery w="100%" /> */}
          {/* <IconsChakraUI w="100%" /> */}
          {/* <IconsFontAwesome1 w="100%" /> */}
          {/* <IconsFontAwesome2 w="100%" /> */}
          {/* <IconsFontAwesome3 w="100%" /> */}
          {/* <IconsFontAwesomeEmotions w="100%" /> */}
          {/* <IconsMoon w="100%" /> */}
          {/* <IconsWeather w="100%" /> */}
          {/* <Images1 w="100%" /> */}
          {/* <LinkOverlay w="100% "/> */}
          {/* <MenuLayout1 w="100%" /> */}
          {/* <MenuLayout10 w="100%" /> */}
          {/* <MenuLayout2 w="100%" /> */}
          {/* <MenuLayout4 w="100%" /> */}
          {/* <MenuLayout5 w="100%" /> */}
          {/* <MenuLayout6 w="100%" /> */}
          {/* <MenuLayout7 w="100%" /> */}
          {/* <MenuLayout8 w="100%" /> */}
          {/* <MenuLayout9 w="100%" /> */}
          {/* <ModalLayout1 w="100%" /> */}
          {/* <ModalLayout10 w="100%" /> */}
          {/* <ModalLayout2 w="100%" /> */}
          {/* <ModalLayout3 w="100%" /> */}
          {/* <ModalLayout4 w="100%" /> */}
          {/* <ModalLayout5 w="100%" /> */}
          {/* <ModalLayout6 w="100%" /> */}
          {/* <ModalLayout7 w="100%" /> */}
          {/* <ModalLayout8 w="100%" /> */}
          {/* <ModalLayout9 w="100%" /> */}
          {/* <Popover1 w="100%" /> */}
          {/* <Popover10 w="100%" /> */}
          {/* <Popover2 w="100%" /> */}
          {/* <Popover3 w="100%" /> */}
          {/* <Popover4 w='100%'/> */}
          {/* <Popover5 w="100%" /> */}
          {/* <Popover6 w="100%" /> */}
          {/* <Popover8 w="100%" /> */}
          {/* <Popover9 w="100%" /> */}
          {/* <PopoverForm w='100%'/> */}
          {/* <ProfileLayout1 w="100%" /> */}
          {/* <Pricing1 w="100%" /> */}
          {/* <Pricing2 w='100%'/> */}
          {/* <Pricing3 w='100%'/> */}
          {/* <Pricing4 w='100%'/> */}
          {/* <Pricing5 w='100%'/> */}
          {/* <ProfileLayout2 w="100%" /> */}
          {/* <ProfileLayout3 w="100%" /> */}
          {/* <ProfileLayout4 w="100%" /> */}
          {/* <ProfileLayout5 w="100%" /> */}
          {/* <Sidebar1 w='100% '/> */}
          {/* <Sidebar2 w='100% '/> */}
          {/* <SigninButton w="100%" /> */}
          {/* <SigninButtons w="100%" /> */}
          {/* <Statistics1 w="100%" /> */}
          {/* <Statistics2 w="100%"/> */}
          {/* <Statistics3 w='100%'/> */}
          {/* <Statistics4 w='100%'/> */}
          {/* <Statistics5 w='100%'/> */}
          {/* <Subscribe2 w='100%'/> */}
          {/* <Tabs1 w="100%" /> */}
          {/* <Tabs10 w="100%" /> */}
          {/* <Tabs11 w="100%" /> */}
          {/* <Tabs2 w="100%" /> */}
          {/* <Tabs3 w="100%" /> */}
          {/* <Tabs4 w="100%" /> */}
          {/* <Tabs5 w="100%" /> */}
          {/* <Tabs6 w="100%" /> */}
          {/* <Tabs7 w="100%" /> */}
          {/* <Tabs9 w="100%" /> */}
          {/* <Testimonial1 w="100%" /> */}
          {/* <Testimonial2 w="100%" /> */}
          {/* <Testimonial3 w="100%" /> */}
          {/* <Testimonial4 w="100%" /> */}
          {/* <Testimonial5 w="100%" /> */}
          {/* <Tooltips1 w="100%" /> */}
          {/* <Transitions1 w="100%" /> */}
          {/* <Transitions2 w="100%" /> */}
          {/* <Transitions3 w="100%" /> */}
          {/* <Transitions4 w="100%" /> */}
          {/* <Transitions5 w="100%" /> */}
          {/* <VisuallyHidden w="100%" /> */}
        </Web3ContextProvider>
      </ChakraProvider>
    </StateProvider>
  );
}
export default App;
