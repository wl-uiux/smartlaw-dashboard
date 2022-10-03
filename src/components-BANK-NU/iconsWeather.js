import React from "react";            
import { Container } from "@chakra-ui/react"            
import {            
 Box,           
 Spacer,           
 HStack,           
 VStack,           
 Tooltip,           
 Icon,           
 Button,           
ButtonGroup   
} from "@chakra-ui/react";            
import { WiAlien, WiBarometer, WiCelsius, WiCloudDown, WiCloudRefresh, WiCloudUp, WiCloud, WiCloudyGusts, WiCloudyWindy, WiCloudy, WiDayCloudyGusts, WiDayCloudyHigh, WiDayCloudyWindy, WiDayCloudy, WiDayFog, WiDayHail, WiDayHaze, WiDayLightWind, WiDayLightning, WiDayRainMix, WiDayRainWind, WiDayRain, WiDayShowers, WiDaySleetStorm, WiDaySleet, WiDaySnowThunderstorm, WiDaySnowWind, WiDaySnow, WiDaySprinkle, WiDayStormShowers, WiDaySunnyOvercast, WiDaySunny, WiDayThunderstorm, WiDayWindy, WiDegrees, WiDirectionDownLeft, WiDirectionDownRight, WiDirectionDown, WiDirectionLeft, WiDirectionRight, WiDirectionUpLeft, WiDirectionUpRight, WiDirectionUp, WiDust, WiEarthquake, WiFahrenheit, WiFire, WiFlood, WiFog, WiGaleWarning, WiHail, WiHorizonAlt, WiHorizon, WiHot, WiHumidity, WiHurricaneWarning, WiHurricane, WiLightning, WiLunarEclipse, WiMeteor, WiMoonAltFirstQuarter, WiMoonAltFull, WiMoonAltNew, WiMoonAltThirdQuarter, WiMoonAltWaningCrescent1, WiMoonAltWaningCrescent2, WiMoonAltWaningCrescent3, WiMoonAltWaningCrescent4, WiMoonAltWaningCrescent5, WiMoonAltWaningCrescent6, WiMoonAltWaningGibbous1, WiMoonAltWaningGibbous2, WiMoonAltWaningGibbous3, WiMoonAltWaningGibbous4, WiMoonAltWaningGibbous5, WiMoonAltWaningGibbous6, WiMoonAltWaxingCrescent1, WiMoonAltWaxingCrescent2, WiMoonAltWaxingCrescent3, WiMoonAltWaxingCrescent4, WiMoonAltWaxingCrescent5, WiMoonAltWaxingCrescent6, WiMoonAltWaxingGibbous1, WiMoonAltWaxingGibbous2, WiMoonAltWaxingGibbous3, WiMoonAltWaxingGibbous4, WiMoonAltWaxingGibbous5, WiMoonAltWaxingGibbous6, WiMoonFirstQuarter, WiMoonFull, WiMoonNew, WiMoonThirdQuarter, WiMoonWaningCrescent1, WiMoonWaningCrescent2, WiMoonWaningCrescent3, WiMoonWaningCrescent4, WiMoonWaningCrescent5, WiMoonWaningCrescent6, WiMoonWaningGibbous1, WiMoonWaningGibbous2, WiMoonWaningGibbous3, WiMoonWaningGibbous4, WiMoonWaningGibbous5, WiMoonWaningGibbous6, WiMoonWaxingCrescent1, WiMoonWaxingCrescent2, WiMoonWaxingCrescent3, WiMoonWaxingCrescent4, WiMoonWaxingCrescent5, WiMoonWaxingCrescent6, WiMoonWaxingGibbous1, WiMoonWaxingGibbous2, WiMoonWaxingGibbous3, WiMoonWaxingGibbous4, WiMoonWaxingGibbous5, WiMoonWaxingGibbous6, WiMoonrise, WiMoonset, WiNa, WiNightAltCloudyGusts, WiNightAltCloudyHigh, WiNightAltCloudyWindy, WiNightAltCloudy, WiNightAltHail, WiNightAltLightning, WiNightAltPartlyCloudy, WiNightAltRainMix, WiNightAltRainWind, WiNightAltRain, WiNightAltShowers, WiNightAltSleetStorm, WiNightAltSleet, WiNightAltSnowThunderstorm, WiNightAltSnowWind, WiNightAltSnow, WiNightAltSprinkle, WiNightAltStormShowers, WiNightAltThunderstorm, WiNightClear, WiNightCloudyGusts, WiNightCloudyHigh, WiNightCloudyWindy, WiNightCloudy, WiNightFog, WiNightHail, WiNightLightning, WiNightPartlyCloudy, WiNightRainMix, WiNightRainWind, WiNightRain, WiNightShowers, WiNightSleetStorm, WiNightSleet, WiNightSnowThunderstorm, WiNightSnowWind, WiNightSnow, WiNightSprinkle, WiNightStormShowers, WiNightThunderstorm, WiRainMix, WiRainWind, WiRain, WiRaindrop, WiRaindrops, WiRefreshAlt, WiRefresh, WiSandstorm, WiShowers, WiSleet, WiSmallCraftAdvisory, WiSmog, WiSmoke, WiSnowWind, WiSnow, WiSnowflakeCold, WiSolarEclipse, WiSprinkle, WiStars, WiStormShowers, WiStormWarning, WiStrongWind, WiSunrise, WiSunset, WiThermometerExterior, WiThermometerInternal, WiThermometer, WiThunderstorm, WiTime1, WiTime10, WiTime11, WiTime12, WiTime2, WiTime3, WiTime4, WiTime5, WiTime6, WiTime7, WiTime8, WiTime9, WiTornado, WiTrain, WiTsunami, WiUmbrella, WiVolcano, WiWindBeaufort0, WiWindBeaufort1, WiWindBeaufort10, WiWindBeaufort11, WiWindBeaufort12, WiWindBeaufort2, WiWindBeaufort3, WiWindBeaufort4, WiWindBeaufort5, WiWindBeaufort6, WiWindBeaufort7, WiWindBeaufort8, WiWindBeaufort9, WiWindDeg, WiWindy } from "react-icons/wi";            
      function IconsWeather() {      
       return (     
        <HStack>    
        <Spacer/>    
        <div>    
        <Tooltip hasArrow label=" Search places " bg="red.600">  
        <Button> Button  </Button>  
        </Tooltip>    
        </div>    
<br/>               
<br/>               
<hr/>               
<br/>               
<br/>               
        <div>    
        <Tooltip label=" Click the LexDAO logo to zoom out of the donut."   
aria-label=" LexDAO Hint and Tip " >  
NavTip   
        </Tooltip>    
        </div>    
<br/>               
<hr/>               
<br/>               
        <div>    
<Icon as={ WiAlien } w={8} h={8} color="blue.500" />  
<Icon as={ WiBarometer } w={8} h={8} color="blue.500" />  
<Icon as={ WiCelsius } w={8} h={8} color="blue.500" />  
<Icon as={ WiCloudDown } w={8} h={8} color="blue.500" />  
<Icon as={ WiCloudRefresh } w={8} h={8} color="blue.500" />  
<Icon as={ WiCloudUp } w={8} h={8} color="blue.500" />  
<Icon as={ WiCloud } w={8} h={8} color="blue.500" />  
<Icon as={ WiCloudyGusts } w={8} h={8} color="blue.500" />  
<Icon as={ WiCloudyWindy } w={8} h={8} color="blue.500" />  
<Icon as={ WiCloudy } w={8} h={8} color="blue.500" />  
<Icon as={ WiDayCloudyGusts } w={8} h={8} color="blue.500" />  
<Icon as={ WiDayCloudyHigh } w={8} h={8} color="blue.500" />  
<Icon as={ WiDayCloudyWindy } w={8} h={8} color="blue.500" />  
<Icon as={ WiDayCloudy } w={8} h={8} color="blue.500" />  
<Icon as={ WiDayFog } w={8} h={8} color="blue.500" />  
<Icon as={ WiDayHail } w={8} h={8} color="blue.500" />  
<Icon as={ WiDayHaze } w={8} h={8} color="blue.500" />  
<Icon as={ WiDayLightWind } w={8} h={8} color="blue.500" />  
<Icon as={ WiDayLightning } w={8} h={8} color="blue.500" />  
<Icon as={ WiDayRainMix } w={8} h={8} color="blue.500" />  
<Icon as={ WiDayRainWind } w={8} h={8} color="blue.500" />  
<Icon as={ WiDayRain } w={8} h={8} color="blue.500" />  
<Icon as={ WiDayShowers } w={8} h={8} color="blue.500" />  
<Icon as={ WiDaySleetStorm } w={8} h={8} color="blue.500" />  
<Icon as={ WiDaySleet } w={8} h={8} color="blue.500" />  
<Icon as={ WiDaySnowThunderstorm } w={8} h={8} color="blue.500" />  
<Icon as={ WiDaySnowWind } w={8} h={8} color="blue.500" />  
<Icon as={ WiDaySnow } w={8} h={8} color="blue.500" />  
<Icon as={ WiDaySprinkle } w={8} h={8} color="blue.500" />  
<Icon as={ WiDayStormShowers } w={8} h={8} color="blue.500" />  
<Icon as={ WiDaySunnyOvercast } w={8} h={8} color="blue.500" />  
<Icon as={ WiDaySunny } w={8} h={8} color="blue.500" />  
<Icon as={ WiDayThunderstorm } w={8} h={8} color="blue.500" />  
<Icon as={ WiDayWindy } w={8} h={8} color="blue.500" />  
<Icon as={ WiDegrees } w={8} h={8} color="blue.500" />  
<Icon as={ WiDirectionDownLeft } w={8} h={8} color="blue.500" />  
<Icon as={ WiDirectionDownRight } w={8} h={8} color="blue.500" />  
<Icon as={ WiDirectionDown } w={8} h={8} color="blue.500" />  
<Icon as={ WiDirectionLeft } w={8} h={8} color="blue.500" />  
<Icon as={ WiDirectionRight } w={8} h={8} color="blue.500" />  
<Icon as={ WiDirectionUpLeft } w={8} h={8} color="blue.500" />  
<Icon as={ WiDirectionUpRight } w={8} h={8} color="blue.500" />  
<Icon as={ WiDirectionUp } w={8} h={8} color="blue.500" />  
<Icon as={ WiDust } w={8} h={8} color="blue.500" />  
<Icon as={ WiEarthquake } w={8} h={8} color="blue.500" />  
<Icon as={ WiFahrenheit } w={8} h={8} color="blue.500" />  
<Icon as={ WiFire } w={8} h={8} color="blue.500" />  
<Icon as={ WiFlood } w={8} h={8} color="blue.500" />  
<Icon as={ WiFog } w={8} h={8} color="blue.500" />  
<Icon as={ WiGaleWarning } w={8} h={8} color="blue.500" />  
<Icon as={ WiHail } w={8} h={8} color="blue.500" />  
<Icon as={ WiHorizonAlt } w={8} h={8} color="blue.500" />  
<Icon as={ WiHorizon } w={8} h={8} color="blue.500" />  
<Icon as={ WiHot } w={8} h={8} color="blue.500" />  
<Icon as={ WiHumidity } w={8} h={8} color="blue.500" />  
<Icon as={ WiHurricaneWarning } w={8} h={8} color="blue.500" />  
<Icon as={ WiHurricane } w={8} h={8} color="blue.500" />  
<Icon as={ WiLightning } w={8} h={8} color="blue.500" />  
<Icon as={ WiLunarEclipse } w={8} h={8} color="blue.500" />  
<Icon as={ WiMeteor } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltFirstQuarter } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltFull } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltNew } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltThirdQuarter } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaningCrescent1 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaningCrescent2 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaningCrescent3 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaningCrescent4 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaningCrescent5 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaningCrescent6 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaningGibbous1 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaningGibbous2 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaningGibbous3 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaningGibbous4 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaningGibbous5 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaningGibbous6 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaxingCrescent1 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaxingCrescent2 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaxingCrescent3 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaxingCrescent4 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaxingCrescent5 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaxingCrescent6 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaxingGibbous1 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaxingGibbous2 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaxingGibbous3 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaxingGibbous4 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaxingGibbous5 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonAltWaxingGibbous6 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonFirstQuarter } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonFull } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonNew } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonThirdQuarter } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaningCrescent1 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaningCrescent2 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaningCrescent3 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaningCrescent4 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaningCrescent5 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaningCrescent6 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaningGibbous1 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaningGibbous2 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaningGibbous3 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaningGibbous4 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaningGibbous5 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaningGibbous6 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaxingCrescent1 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaxingCrescent2 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaxingCrescent3 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaxingCrescent4 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaxingCrescent5 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaxingCrescent6 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaxingGibbous1 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaxingGibbous2 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaxingGibbous3 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaxingGibbous4 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaxingGibbous5 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonWaxingGibbous6 } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonrise } w={8} h={8} color="blue.500" />  
<Icon as={ WiMoonset } w={8} h={8} color="blue.500" />  
<Icon as={ WiNa } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightAltCloudyGusts } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightAltCloudyHigh } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightAltCloudyWindy } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightAltCloudy } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightAltHail } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightAltLightning } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightAltPartlyCloudy } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightAltRainMix } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightAltRainWind } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightAltRain } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightAltShowers } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightAltSleetStorm } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightAltSleet } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightAltSnowThunderstorm } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightAltSnowWind } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightAltSnow } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightAltSprinkle } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightAltStormShowers } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightAltThunderstorm } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightClear } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightCloudyGusts } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightCloudyHigh } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightCloudyWindy } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightCloudy } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightFog } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightHail } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightLightning } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightPartlyCloudy } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightRainMix } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightRainWind } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightRain } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightShowers } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightSleetStorm } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightSleet } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightSnowThunderstorm } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightSnowWind } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightSnow } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightSprinkle } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightStormShowers } w={8} h={8} color="blue.500" />  
<Icon as={ WiNightThunderstorm } w={8} h={8} color="blue.500" />  
<Icon as={ WiRainMix } w={8} h={8} color="blue.500" />  
<Icon as={ WiRainWind } w={8} h={8} color="blue.500" />  
<Icon as={ WiRain } w={8} h={8} color="blue.500" />  
<Icon as={ WiRaindrop } w={8} h={8} color="blue.500" />  
<Icon as={ WiRaindrops } w={8} h={8} color="blue.500" />  
<Icon as={ WiRefreshAlt } w={8} h={8} color="blue.500" />  
<Icon as={ WiRefresh } w={8} h={8} color="blue.500" />  
<Icon as={ WiSandstorm } w={8} h={8} color="blue.500" />  
<Icon as={ WiShowers } w={8} h={8} color="blue.500" />  
<Icon as={ WiSleet } w={8} h={8} color="blue.500" />  
<Icon as={ WiSmallCraftAdvisory } w={8} h={8} color="blue.500" />  
<Icon as={ WiSmog } w={8} h={8} color="blue.500" />  
<Icon as={ WiSmoke } w={8} h={8} color="blue.500" />  
<Icon as={ WiSnowWind } w={8} h={8} color="blue.500" />  
<Icon as={ WiSnow } w={8} h={8} color="blue.500" />  
<Icon as={ WiSnowflakeCold } w={8} h={8} color="blue.500" />  
<Icon as={ WiSolarEclipse } w={8} h={8} color="blue.500" />  
<Icon as={ WiSprinkle } w={8} h={8} color="blue.500" />  
<Icon as={ WiStars } w={8} h={8} color="blue.500" />  
<Icon as={ WiStormShowers } w={8} h={8} color="blue.500" />  
<Icon as={ WiStormWarning } w={8} h={8} color="blue.500" />  
<Icon as={ WiStrongWind } w={8} h={8} color="blue.500" />  
<Icon as={ WiSunrise } w={8} h={8} color="blue.500" />  
<Icon as={ WiSunset } w={8} h={8} color="blue.500" />  
<Icon as={ WiThermometerExterior } w={8} h={8} color="blue.500" />  
<Icon as={ WiThermometerInternal } w={8} h={8} color="blue.500" />  
<Icon as={ WiThermometer } w={8} h={8} color="blue.500" />  
<Icon as={ WiThunderstorm } w={8} h={8} color="blue.500" />  
<Icon as={ WiTime1 } w={8} h={8} color="blue.500" />  
<Icon as={ WiTime10 } w={8} h={8} color="blue.500" />  
<Icon as={ WiTime11 } w={8} h={8} color="blue.500" />  
<Icon as={ WiTime12 } w={8} h={8} color="blue.500" />  
<Icon as={ WiTime2 } w={8} h={8} color="blue.500" />  
<Icon as={ WiTime3 } w={8} h={8} color="blue.500" />  
<Icon as={ WiTime4 } w={8} h={8} color="blue.500" />  
<Icon as={ WiTime5 } w={8} h={8} color="blue.500" />  
<Icon as={ WiTime6 } w={8} h={8} color="blue.500" />  
<Icon as={ WiTime7 } w={8} h={8} color="blue.500" />  
<Icon as={ WiTime8 } w={8} h={8} color="blue.500" />  
<Icon as={ WiTime9 } w={8} h={8} color="blue.500" />  
<Icon as={ WiTornado } w={8} h={8} color="blue.500" />  
<Icon as={ WiTrain } w={8} h={8} color="blue.500" />  
<Icon as={ WiTsunami } w={8} h={8} color="blue.500" />  
<Icon as={ WiUmbrella } w={8} h={8} color="blue.500" />  
<Icon as={ WiVolcano } w={8} h={8} color="blue.500" />  
<Icon as={ WiWindBeaufort0 } w={8} h={8} color="blue.500" />  
<Icon as={ WiWindBeaufort1 } w={8} h={8} color="blue.500" />  
<Icon as={ WiWindBeaufort10 } w={8} h={8} color="blue.500" />  
<Icon as={ WiWindBeaufort11 } w={8} h={8} color="blue.500" />  
<Icon as={ WiWindBeaufort12 } w={8} h={8} color="blue.500" />  
<Icon as={ WiWindBeaufort2 } w={8} h={8} color="blue.500" />  
<Icon as={ WiWindBeaufort3 } w={8} h={8} color="blue.500" />  
<Icon as={ WiWindBeaufort4 } w={8} h={8} color="blue.500" />  
<Icon as={ WiWindBeaufort5 } w={8} h={8} color="blue.500" />  
<Icon as={ WiWindBeaufort6 } w={8} h={8} color="blue.500" />  
<Icon as={ WiWindBeaufort7 } w={8} h={8} color="blue.500" />  
<Icon as={ WiWindBeaufort8 } w={8} h={8} color="blue.500" />  
<Icon as={ WiWindBeaufort9 } w={8} h={8} color="blue.500" />  
<Icon as={ WiWindDeg } w={8} h={8} color="blue.500" />  
<Icon as={ WiWindy } w={8} h={8} color="blue.500" />  
        </div>    
        <HStack>    
        <ButtonGroup variant="outline" spacing="6">    
        <Button colorScheme="blue"> Save </Button>  
        <Button> Cancel </Button>  
        </ButtonGroup>    
        </HStack>    
        <HStack>    
        <Container>    
Benefits LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.   
        </Container>    
        </HStack>    
        <HStack>    
        <VStack>    
        <Container maxW="container.xl">Extra-Large Container</Container>    
        <Container maxW="container.lg">Large Container</Container>    
        <Container maxW="container.md">Medium Container</Container>    
        <Container maxW="container.sm">Small Container</Container>    
        </VStack>    
        </HStack>    
        <HStack>    
        <Container maxW="xl" centerContent>    
        <Box padding="4" bg="gray.100" maxW="3xl">    
Benefits LexDAO provides value and service supporting the fourth industrial revolution. Web3 is a set of technologies that publicly interoperate through blockchain and node based computing systems.   
        </Box>    
        </Container>    
        </HStack>    
        </HStack>    
);
}
export default IconsWeather;              
