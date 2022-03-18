// Copyright 2022 Eric Lawrey - Australian Institute of Marine Science
//
// MIT License https://mit-license.org/
// This script is written to run on the Google Earth Engine (GEE). 
//
// This script regenerates all the Sentinel 2 satellite image composites
// in the Coral Sea region.

// This script generates a lot of export tasks (155) in the 
// interactive GEE code editor as it regenerates all the imagery
// in the Coral-Sea region.
// To export all the images in one go you will need approximately
// 30 GB free in your Google Drive.

// If instead you just want to preview one of the composites in 
// the editor then you need to modify the code to stop the exports.
//
// Find and replace: false, true, REF1_OPTIONS
// With: false, true, REF1_OPTIONS
// Find and replace: false, false, REF2_OPTIONS
// With: false, false, REF2_OPTIONS
//
// Now set the is_display option of the scene of interest to true
// i.e. true, false, REF1_OPTIONS
// Note: that this script does not zoom to the area of interest
// and so you will need to zoom and pan the map to the correct
// location to see the generated composite. The processing also
// takes a couple of minutes.

// === README: ====
// If you modify your copy of s2Utils.js you must change this path, changing
// the username. GEE only allows absolute paths.
var s2Utils = require('users/ericlawrey/CS_AIMS_Coral-Sea-Features_Img:src/01-gee/s2Utils.js');

// These are the options for the primary reference imagery which
// are made from the best set of images available.

var REF1_OPTIONS = {
  //colourGrades: ['DeepFalse','TrueColour','Shallow','Slope','DryReef', 'Depth5m', 'Depth10m', 'Breaking'],
  //exportScale: [10, 10, 10, 30, 10, 10, 10, 10],
  colourGrades: ['DryReef', 'Depth5m', 'Depth10m', 'Breaking', 'Land'],
  exportScale: [5, 5, 5, 5, 5],
  exportBasename: 'CS_AIMS_Coral-Sea-Features_Img_S2_R1',
  exportFolder: 'EarthEngine/CS_AIMS_Coral-Sea-Features_Img/Coral-Sea3',
  
  applySunglintCorrection: true,
  applyBrightnessAdjustment: true
};


// These options correspond to the secondary reference imagery.
// This will be made from the next best set of images. The goal
// is to provide a second set of imagery to determine if spots
// in the imagery are artefacts (from clouds) or real features.
var REF2_OPTIONS = {
  colourGrades: ['DeepFalse','TrueColour','Slope'],
  exportBasename: 'CS_AIMS_Coral-Sea-Features_Img_S2_R2',
  exportFolder: 'EarthEngine/CS_AIMS_Coral-Sea-Features_Img/Coral-Sea',
  exportScale: [10, 10, 30],
  applySunglintCorrection: true,
  applyBrightnessAdjustment: true
};

// IMAGE CLASSIFICATION:
// Images have been sorted into several categories during the image
// selection process. 
// Excellent - Cloud free image, free from uncorrected sunglint
// Good - Small amount of clouds, but not over the reefs. Free from
//      uncorrected sunglint.
// OK - More clouds and some are over reef areas, but image has
//      large clear patches. Free from uncorrected sunglint.
// Maybe - More significant clouds or noise from waves, small amount
//      of uncorrected sunglint. Still signicant patches of useful
//      imagery of the reef. Generally only useful if there is no
//      better imagery.

// OTHER INFO:
// For some scenes the CLOUD_PIXEL_PERCENTAGE used for prefiltering
// this images was recorded. Also the number of images that were
// reviewed to select the images that make up the composite.  

// ===============================================================
//
//                      CORAL SEA
//
// ===============================================================

// ==== Boot Reef, Portlock Reefs (Coral Sea) - Far North ===
// CLOUD_PIXEL_PERCENTAGE 1%
// There were not sufficient good images to create a second
// reference image.
// 19 of 19 images
s2Utils.s2_composite_display_and_export(
  [
    // Maybe
    "COPERNICUS/S2/20190115T004709_20190115T004705_T55LBK",
    "COPERNICUS/S2/20190510T004711_20190510T004710_T55LBK",
    "COPERNICUS/S2/20190907T004711_20190907T004705_T55LBK",
    "COPERNICUS/S2/20200613T004711_20200613T004712_T55LBK",
    "COPERNICUS/S2/20200822T004711_20200822T004712_T55LBK",
    "COPERNICUS/S2/20210802T004709_20210802T004707_T55LBK"
  ],
  false, true, REF1_OPTIONS);

  
// ======== Ashmore Reef (Coral Sea) - Far North =========
// Searched 27 out of 27 
// Good images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20180813T004711_20180813T004705_T54LZP",
    "COPERNICUS/S2/20200822T004711_20200822T004712_T54LZP",
    "COPERNICUS/S2/20160823T004902_20160823T004856_T54LZP",
    "COPERNICUS/S2/20210603T004709_20210603T004707_T54LZP"
  ],
  false, true, REF1_OPTIONS);

// OK images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20210723T004709_20210723T004708_T54LZP",
    "COPERNICUS/S2/20200414T004711_20200414T004705_T54LZP"
  ],
  false, false, REF2_OPTIONS);
  
// Maybe images
//COPERNICUS/S2/20160505T004712_20160505T004711_T54LZP
//COPERNICUS/S2/20160823T004902_20160823T021200_T54LZP
//COPERNICUS/S2/20170823T004659_20170823T004702_T54LZP
//COPERNICUS/S2/20200613T004711_20200613T004712_T54LZP
  
  
// ======== Osprey Reef (Coral Sea) - North =========
// Searched 75 out of 75
// Good images
// little difference when trying different image combinations
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20161215T003032_20161215T003028_T55LDE",
    "COPERNICUS/S2/20170713T002711_20170713T002708_T55LDE",
    "COPERNICUS/S2/20181016T002701_20181016T002704_T55LDE",
    "COPERNICUS/S2/20181115T002701_20181115T002702_T55LDE",
    "COPERNICUS/S2/20210319T002709_20210319T002706_T55LDE",
    "COPERNICUS/S2/20201005T002711_20201005T002713_T55LDE"
  ],
  false, true, REF1_OPTIONS);

//left as is - RB
// Maybe images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20160529T003042_20160529T003038_T55LDE",
    "COPERNICUS/S2/20160608T002733_20160608T033407_T55LDE",
    "COPERNICUS/S2/20170124T003031_20170124T003025_T55LDE",
    "COPERNICUS/S2/20171205T002659_20171205T002656_T55LDE",
    "COPERNICUS/S2/20171230T003031_20171230T003026_T55LDE",
    "COPERNICUS/S2/20180213T002659_20180213T002700_T55LDE",
    "COPERNICUS/S2/20181011T002709_20181011T002703_T55LDE",
    "COPERNICUS/S2/20181016T002701_20181016T002704_T55LDE",
    "COPERNICUS/S2/20181105T002701_20181105T002703_T55LDE",
  ],
  false, false, REF2_OPTIONS);



// ======== Bougainville Reef (Coral Sea) =========
// Searched 46 out of 46 images
// 1 excellent and 4 Good
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20180812T002659_20180812T002702_T55LEC",
    "COPERNICUS/S2/20180822T002659_20180822T002700_T55LEC",
    "COPERNICUS/S2/20190906T002709_20190906T002709_T55LEC",
    "COPERNICUS/S2/20210722T002711_20210722T002711_T55LEC",
    "COPERNICUS/S2/20170613T003031_20170613T003033_T55LEC"
  ],
  false, true, REF1_OPTIONS);


// Maybe images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20170827T003029_20170827T003028_T55LEC",
    "COPERNICUS/S2/20180213T002659_20180213T002700_T55LEC",
    "COPERNICUS/S2/20180713T002709_20180713T002923_T55LEC",
    "COPERNICUS/S2/20190613T002711_20190613T002710_T55LEC",
    "COPERNICUS/S2/20190827T002709_20190827T002712_T55LEC",
    "COPERNICUS/S2/20200304T002709_20200304T002705_T55LEC",
  ],
  false, false, REF2_OPTIONS);



// ======== Diane Bank (Coral Sea) - Central =========
// Searched 66 out of 66 images
// 2 excellent

s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20200729T002059_20200729T002057_T55LGC",
    "COPERNICUS/S2/20200823T002101_20200823T002100_T55LGC"
  ],
  false, true, REF1_OPTIONS);

// left as is - RB
// Maybe images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20160605T002112_20160605T002110_T55LGC",
    "COPERNICUS/S2/20170715T002109_20170715T002105_T55LGC",
    "COPERNICUS/S2/20170814T002109_20170814T002103_T55LGC",
    "COPERNICUS/S2/20170824T002059_20170824T002101_T55LGC",
    "COPERNICUS/S2/20180426T002101_20180426T002056_T55LGC",
    "COPERNICUS/S2/20180720T002049_20180720T002052_T55LGC",
    "COPERNICUS/S2/20180730T002049_20180730T002051_T55LGC",
    "COPERNICUS/S2/20180814T002051_20180814T002054_T55LGC",
    "COPERNICUS/S2/20180928T002049_20180928T002048_T55LGC"
  ],
  false, false, REF2_OPTIONS);



// ======== Willis Islets (Coral Sea) =========
// Searched 61 out of 61 images
// 1 excellent, 2 Good and 4 OK images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20170720T002111_20170720T002106_T55LHC",
    "COPERNICUS/S2/20200405T002051_20200405T002051_T55LHC",
    "COPERNICUS/S2/20180819T002049_20180819T002047_T55LHC",
    "COPERNICUS/S2/20180928T002049_20180928T002048_T55LHC",
    "COPERNICUS/S2/20190416T002059_20190416T002100_T55LHC",
    "COPERNICUS/S2/20200823T002101_20200823T002100_T55LHC",
    "COPERNICUS/S2/20190720T002101_20190720T002100_T55LHC"
  ],
  false, true, REF1_OPTIONS);

//left as is - RB
// Maybe images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20160903T002102_20160903T032316_T55LHC",
    "COPERNICUS/S2/20180302T002049_20180302T002045_T55LHC",
    "COPERNICUS/S2/20170913T002059_20170913T002056_T55LHC",
    "COPERNICUS/S2/20180605T002101_20180605T002055_T55LHC",
    "COPERNICUS/S2/20180725T002101_20180725T002055_T55LHC",
    "COPERNICUS/S2/20180730T002049_20180730T002051_T55LHC",
    "COPERNICUS/S2/20200410T002049_20200410T002051_T55LHC",
    "COPERNICUS/S2/20200729T002059_20200729T002057_T55LHC"
  ],
  false, false, REF2_OPTIONS);



// ======== Holmes Reefs (West), Flora Reef, McDermott Bank (Coral Sea) =========
// Searched 61 out of 61 images
// 3 Excellent, 1 Good images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20160608T002712_20160608T002733_T55KEB",
    "COPERNICUS/S2/20160608T002733_20160608T033407_T55KEB",
    "COPERNICUS/S2/20190906T002709_20190906T002709_T55KEB",
    "COPERNICUS/S2/20180812T002659_20180812T002702_T55KEB"
  ],
  false, true, REF1_OPTIONS);


// 4 good images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20200528T002711_20200528T002714_T55KEB",
    "COPERNICUS/S2/20210722T002711_20210722T002711_T55KEB",
    "COPERNICUS/S2/20180728T002711_20180728T002708_T55KEB",
    "COPERNICUS/S2/20190703T002711_20190703T002712_T55KEB"
  ],
  false, false, REF2_OPTIONS);
// Maybe
// COPERNICUS/S2/20160509T003042_20160509T003038_T55KEB
// COPERNICUS/S2/20160916T002702_20160916T033357_T55KEB
// COPERNICUS/S2/20160926T003032_20160926T015230_T55KEB
// COPERNICUS/S2/20161006T002702_20161006T033359_T55KEB
// COPERNICUS/S2/20180213T002659_20180213T002700_T55KEB
// COPERNICUS/S2/20180419T002711_20180419T002709_T55KEB
// COPERNICUS/S2/20180802T002709_20180802T002704_T55KEB


// ======== Holmes Reefs (East) (Coral Sea) =========
// Searched 121 out of 121 images
// 5 Excellent right, 2 Good left images, 5 okay left images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20190918T002051_20190918T002054_T55KFB",
    "COPERNICUS/S2/20200729T002059_20200729T002057_T55KFB",
    "COPERNICUS/S2/20180426T002101_20180426T002056_T55KFB",
    "COPERNICUS/S2/20200818T002059_20200818T002058_T55KFB",
    "COPERNICUS/S2/20200823T002101_20200823T002100_T55KFB",
    "COPERNICUS/S2/20200930T002709_20200930T002710_T55KFB",
    "COPERNICUS/S2/20210319T002709_20210319T002706_T55KFB",
    "COPERNICUS/S2/20170514T002711_20170514T002710_T55KFB",
    "COPERNICUS/S2/20190926T002709_20190926T002707_T55KFB",
    "COPERNICUS/S2/20180419T002711_20180419T002709_T55KFB",
    "COPERNICUS/S2/20190812T002711_20190812T002711_T55KFB",
    "COPERNICUS/S2/20190827T002709_20190827T002712_T55KFB"
  ],
  false, true, REF1_OPTIONS);

// Left as is - RB
// 6 OK right images, 5 Maybe left images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20160605T002112_20160605T002110_T55KFB",
    "COPERNICUS/S2/20170220T002101_20170220T002059_T55KFB",
    "COPERNICUS/S2/20170720T002111_20170720T002106_T55KFB",
    "COPERNICUS/S2/20180730T002049_20180730T002051_T55KFB",
    "COPERNICUS/S2/20190220T001631_20190220T001625_T55KFB",
    "COPERNICUS/S2/20190903T002059_20190903T002057_T55KFB",
    "COPERNICUS/S2/20160916T002702_20160916T033357_T55KFB",
    "COPERNICUS/S2/20160926T003032_20160926T015230_T55KFB",
    "COPERNICUS/S2/20170906T002659_20170906T002700_T55KFB",
    "COPERNICUS/S2/20180802T002709_20180802T002704_T55KFB",
    "COPERNICUS/S2/20190718T002719_20190718T002716_T55KFB"
  ],
  false, false, REF2_OPTIONS);




// ======== Herald Cays, Willis Islets, Magdelaine Cays (West) (Coral Sea) =========
// Searched 70 out of 70 images
// 7 Excellent images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20170720T002111_20170720T002106_T55KGB",
    "COPERNICUS/S2/20180426T002101_20180426T002056_T55KGB",
    "COPERNICUS/S2/20180829T002049_20180829T002045_T55KGB",
    "COPERNICUS/S2/20190918T002051_20190918T002054_T55KGB",
    "COPERNICUS/S2/20200729T002059_20200729T002057_T55KGB",
    "COPERNICUS/S2/20200818T002059_20200818T002058_T55KGB",
    "COPERNICUS/S2/20200823T002101_20200823T002100_T55KGB"
  ],
  false, true, REF1_OPTIONS);


// 14 Good
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20170715T002109_20170715T002105_T55KGB",
    "COPERNICUS/S2/20190401T002101_20190401T002055_T55KGB",
    "COPERNICUS/S2/20190730T002101_20190730T002059_T55KGB",
    "COPERNICUS/S2/20210306T002059_20210306T002053_T55KGB",
    "COPERNICUS/S2/20170814T002109_20170814T002103_T55KGB",
    "COPERNICUS/S2/20190903T002059_20190903T002057_T55KGB",
    "COPERNICUS/S2/20210515T002059_20210515T002053_T55KGB",
    "COPERNICUS/S2/20180730T002049_20180730T002051_T55KGB",
    "COPERNICUS/S2/20190220T001631_20190220T001625_T55KGB",
    "COPERNICUS/S2/20190913T002059_20190913T002055_T55KGB",
    "COPERNICUS/S2/20200116T002051_20200116T002048_T55KGB",
    "COPERNICUS/S2/20200420T002049_20200420T002049_T55KGB",
    "COPERNICUS/S2/20200922T002101_20200922T002059_T55KGB",
    "COPERNICUS/S2/20210614T002059_20210614T002055_T55KGB"
  ],
  false, false, REF2_OPTIONS);

// Maybe
// COPERNICUS/S2/20160605T002112_20160605T002110_T55KGB
// COPERNICUS/S2/20160625T002112_20160625T002106_T55KGB
// COPERNICUS/S2/20160913T002102_20160913T014402_T55KGB
// COPERNICUS/S2/20170824T002059_20170824T002101_T55KGB
// COPERNICUS/S2/20170923T002009_20170923T002012_T55KGB    
// COPERNICUS/S2/20180215T002051_20180215T002102_T55KGB
// COPERNICUS/S2/20180421T002059_20180421T002053_T55KGB
// COPERNICUS/S2/20180720T002049_20180720T002052_T55KGB
// COPERNICUS/S2/20180730T002049_20180730T002051_T55KGB
// COPERNICUS/S2/20180908T002049_20180908T002045_T55KGB
// COPERNICUS/S2/20190312T002051_20190312T002050_T55KGB


// ======== Magdelaine Cays, Coringa Islet (East), U/N reef (Coral Sea) =========
// Searched 68 out of 68 images
// 1 excellent, 3 Good images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20200823T002101_20200823T002100_T55KHB",
    "COPERNICUS/S2/20210306T002059_20210306T002053_T55KHB",
    "COPERNICUS/S2/20180426T002101_20180426T002056_T55KHB",
    "COPERNICUS/S2/20180829T002049_20180829T002045_T55KHB"
  ],
  false, true, REF1_OPTIONS);


// 3 good 8 OK images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20160605T002110_20160605T014413_T55KHB",
    "COPERNICUS/S2/20160605T002112_20160605T002110_T55KHB",
    "COPERNICUS/S2/20170720T002111_20170720T002106_T55KHB",
    "COPERNICUS/S2/20180725T002101_20180725T002055_T55KHB",
    "COPERNICUS/S2/20170715T002109_20170715T002105_T55KHB",
    "COPERNICUS/S2/20170220T002101_20170220T002059_T55KHB",
    "COPERNICUS/S2/20170814T002109_20170814T002103_T55KHB",
    "COPERNICUS/S2/20200405T002051_20200405T002051_T55KHB",
    "COPERNICUS/S2/20200420T002049_20200420T002049_T55KHB",
    "COPERNICUS/S2/20200818T002059_20200818T002058_T55KHB",
    "COPERNICUS/S2/20210614T002059_20210614T002055_T55KHB"
  ],
  false, false, REF2_OPTIONS);

// Maybe
// COPERNICUS/S2/20170220T002101_20170220T002059_T55KHB
// COPERNICUS/S2/20170521T002111_20170521T002108_T55KHB
// COPERNICUS/S2/20170809T002111_20170809T002107_T55KHB
// COPERNICUS/S2/20180725T002101_20180725T002055_T55KHB
// COPERNICUS/S2/20180730T002049_20180730T002051_T55KHB
// COPERNICUS/S2/20180809T002049_20180809T002049_T55KHB
// COPERNICUS/S2/20190526T002109_20190526T002103_T55KHB
// COPERNICUS/S2/20190705T002109_20190705T002103_T55KHB
// COPERNICUS/S2/20190903T002059_20190903T002057_T55KHB


// ======== North Lihou Reef (Coral Sea, Australia) =========
// Searched 42 out of 42 images
// 2 Excellent, 4 Good images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20190905T001111_20190905T001109_T56KLG",
    "COPERNICUS/S2/20200820T001121_20200820T001115_T56KLG",
    "COPERNICUS/S2/20200815T001109_20200815T001112_T56KLG",
    "COPERNICUS/S2/20170905T000731_20170905T000731_T56KLG",
    "COPERNICUS/S2/20210721T001109_20210721T001111_T56KLG",
    "COPERNICUS/S2/20190910T001109_20190910T001110_T56KLG"
  ],
  false, true, REF1_OPTIONS);

// okay images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20210914T001111_20210914T001110_T56KLG",
    "COPERNICUS/S2/20180217T001059_20180217T001101_T56KLG",
    "COPERNICUS/S2/20190702T001119_20190702T001117_T56KLG",
    "COPERNICUS/S2/20210318T001111_20210318T001108_T56KLG",
    "COPERNICUS/S2/20180602T001111_20180602T001110_T56KLG",
    "COPERNICUS/S2/20181015T001109_20181015T001105_T56KLG",
    "COPERNICUS/S2/20180712T001111_20180712T001110_T56KLG"
  ],
  false, false, REF2_OPTIONS);



// ======== North East Lihou Reef tip (Coral Sea, Australia) =========
// Searched 45 out of 45 images
// 3 Excellent, 2 Good
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20190905T001111_20190905T001109_T56KMG",
    "COPERNICUS/S2/20200820T001121_20200820T001115_T56KMG",
    "COPERNICUS/S2/20210721T001109_20210721T001111_T56KMG",
    "COPERNICUS/S2/20180602T001111_20180602T001110_T56KMG",
    "COPERNICUS/S2/20190702T001119_20190702T001117_T56KMG"
  ],
  false, true, REF1_OPTIONS);


// 3 Maybe images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20190528T001111_20190528T001112_T56KMG",
    "COPERNICUS/S2/20180612T001111_20180612T001108_T56KMG",
    "COPERNICUS/S2/20190910T001109_20190910T001110_T56KMG"

  ],
  false, false, REF2_OPTIONS);



// ======== Flinders, Dart Heralds Surprise (Coral Sea) =========
// Searched 72 out of 72 images
// Excellent images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20180426T002101_20180426T002056_T55KFA",
    "COPERNICUS/S2/20181018T002049_20181018T002051_T55KFA",
    "COPERNICUS/S2/20190220T001631_20190220T001625_T55KFA",
    "COPERNICUS/S2/20190824T002059_20190824T002059_T55KFA",
    "COPERNICUS/S2/20190918T002051_20190918T002054_T55KFA",
    "COPERNICUS/S2/20200818T002059_20200818T002058_T55KFA",
    "COPERNICUS/S2/20200729T002059_20200729T002057_T55KFA",
    "COPERNICUS/S2/20200823T002101_20200823T002100_T55KFA",
    "COPERNICUS/S2/20210515T002059_20210515T002053_T55KFA"
  ],
  false, true, REF1_OPTIONS);


// Good images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20210306T002059_20210306T002053_T55KFA",
    "COPERNICUS/S2/20181018T002049_20181018T002051_T55KFA",
    "COPERNICUS/S2/20190220T001631_20190220T001625_T55KFA",
    "COPERNICUS/S2/20191013T002059_20191013T002055_T55KFA",
    "COPERNICUS/S2/20200714T002101_20200714T002059_T55KFA"
  ],
  false, false, REF2_OPTIONS);



// ======== Malay Reef, Magdelaine Cays, Coringa Islet (South), 
//          Abington Reef, U/N Reef (Coral Sea) =========
// Searched 84 out of 84 images
// Excellent images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20180426T002101_20180426T002056_T55KGA",
    "COPERNICUS/S2/20180730T002049_20180730T002051_T55KGA",
    "COPERNICUS/S2/20200729T002059_20200729T002057_T55KGA",
    "COPERNICUS/S2/20200818T002059_20200818T002058_T55KGA",
    "COPERNICUS/S2/20200823T002101_20200823T002100_T55KGA",
    "COPERNICUS/S2/20210306T002059_20210306T002053_T55KGA",
    "COPERNICUS/S2/20210515T002059_20210515T002053_T55KGA"
  ],
  false, true, REF1_OPTIONS);


// good images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20200530T002059_20200530T002056_T55KGA",
    "COPERNICUS/S2/20180829T002049_20180829T002045_T55KGA",
    "COPERNICUS/S2/20180215T002051_20180215T002102_T55KGA",
    "COPERNICUS/S2/20180220T002049_20180220T002046_T55KGA",
    "COPERNICUS/S2/20190903T002059_20190903T002057_T55KGA",
    "COPERNICUS/S2/20210729T002101_20210729T002058_T55KGA"
  ],
  false, false, REF2_OPTIONS);



// ======== Tregrosse Reefs, Diamond Islet West, Magdelaine Cays, 
//          Coringa Islet (South) (Coral Sea) =========
// Searched 80 out of 80 images
s2Utils.s2_composite_display_and_export(
  [
    // Excellent
    "COPERNICUS/S2/20180426T002101_20180426T002056_T55KHA",
    "COPERNICUS/S2/20180829T002049_20180829T002045_T55KHA",
    "COPERNICUS/S2/20200729T002059_20200729T002057_T55KHA",
    "COPERNICUS/S2/20200818T002059_20200818T002058_T55KHA",
    "COPERNICUS/S2/20200823T002101_20200823T002100_T55KHA"
  ],
  false, true, REF1_OPTIONS);



s2Utils.s2_composite_display_and_export(
  [
    // Good images
    "COPERNICUS/S2/20180516T002101_20180516T002057_T55KHA", 
    "COPERNICUS/S2/20160605T002110_20160605T014413_T55KHA",
    "COPERNICUS/S2/20160605T002112_20160605T002110_T55KHA",
    "COPERNICUS/S2/20180730T002049_20180730T002051_T55KHA",
    "COPERNICUS/S2/20180725T002101_20180725T002055_T55KHA",
    "COPERNICUS/S2/20210724T002059_20210724T002056_T55KHA"
  ],
  false, false, REF2_OPTIONS);

// Left Maybe
// COPERNICUS/S2/20160516T002111_20160516T014440_T55KHA
// COPERNICUS/S2/20160903T002102_20160903T002105_T55KHA
// COPERNICUS/S2/20170220T002101_20170220T002059_T55KHA
// COPERNICUS/S2/20170824T002059_20170824T002101_T55KHA
// COPERNICUS/S2/20180421T002059_20180421T002053_T55KHA
// COPERNICUS/S2/20180725T002101_20180725T002055_T55KHA


// ======== Tregrosse Reefs, Diamond Islet (Coral Sea) =========
// Searched 138 out of 138 images
// OK images
s2Utils.s2_composite_display_and_export(
  [
    // 3 Excellent right images
    "COPERNICUS/S2/20180811T001111_20180811T001108_T56KKF",
    "COPERNICUS/S2/20191015T001111_20191015T001112_T56KKF", 
    "COPERNICUS/S2/20201019T001111_20201019T001114_T56KKF",
    // 1 Excellent, 4 good left images
    "COPERNICUS/S2/20180829T002049_20180829T002045_T56KKF",
    "COPERNICUS/S2/20180809T002049_20180809T002049_T56KKF",
    "COPERNICUS/S2/20160605T002110_20160605T014413_T56KKF",
    "COPERNICUS/S2/20200729T002059_20200729T002057_T56KKF",
    "COPERNICUS/S2/20170809T002111_20170809T002107_T56KKF"
  ],
  false, true, REF1_OPTIONS);


// Maybe images
s2Utils.s2_composite_display_and_export(
  [
    //OK Right
    "COPERNICUS/S2/20181005T001109_20181005T001104_T56KKF",
    "COPERNICUS/S2/20190227T001101_20190227T001104_T56KKF",
    "COPERNICUS/S2/20190930T001109_20190930T001109_T56KKF",
    "COPERNICUS/S2/20200118T001109_20200118T001103_T56KKF",
    "COPERNICUS/S2/20181114T001109_20181114T001106_T56KKF",
    "COPERNICUS/S2/20200123T001101_20200123T001102_T56KKF",
    "COPERNICUS/S2/20200303T001101_20200303T001104_T56KKF",
    "COPERNICUS/S2/20190617T001111_20190617T001123_T56KKF",
    "COPERNICUS/S2/20200815T001109_20200815T001112_T56KKF",
// could not impove, left as is RB
    //OK left
    "COPERNICUS/S2/20180516T002101_20180516T002057_T56KKF",
    "COPERNICUS/S2/20180908T002049_20180908T002045_T56KKF",
    //Maybe left
    "COPERNICUS/S2/20180421T002059_20180421T002053_T56KKF",
    "COPERNICUS/S2/20190401T002101_20190401T002055_T56KKF"
  ],
  false, false, REF2_OPTIONS);

// Maybe right
// COPERNICUS/S2/20171219T001059_20171219T001056_T56KKF
// COPERNICUS/S2/20180113T001101_20180113T001101_T56KKF
// COPERNICUS/S2/20180607T001109_20180607T001106_T56KKF
// COPERNICUS/S2/20180727T001109_20180727T001106_T56KKF
// COPERNICUS/S2/20181010T001111_20181010T001106_T56KKF

// ======== Lihou reef (South West) (Coral Sea, Australia) - Central =========
// AUS00614 - Nautical charts. 
// Searched 54 out of 54 images
s2Utils.s2_composite_display_and_export(
  [
    // Excellent
    "COPERNICUS/S2/20190905T001111_20190905T001109_T56KLF",
    "COPERNICUS/S2/20210721T001109_20210721T001111_T56KLF",
    "COPERNICUS/S2/20180811T001111_20180811T001108_T56KLF",
    "COPERNICUS/S2/20201019T001111_20201019T001114_T56KLF" // Sunglint in corner
  ],
  false, true, REF1_OPTIONS);

s2Utils.s2_composite_display_and_export(
  [
    // Good images
    "COPERNICUS/S2/20180217T001059_20180217T001101_T56KLF",
    "COPERNICUS/S2/20181010T001111_20181010T001106_T56KLF",
    "COPERNICUS/S2/20190702T001119_20190702T001117_T56KLF",
    "COPERNICUS/S2/20190930T001109_20190930T001109_T56KLF",
    "COPERNICUS/S2/20200820T001121_20200820T001115_T56KLF"
  ],
  false, false, REF2_OPTIONS);

// Maybe
// COPERNICUS/S2/20170930T001059_20170930T001053_T56KLF
// COPERNICUS/S2/20180202T001101_20180202T001104_T56KLF
// COPERNICUS/S2/20180212T001111_20180212T001105_T56KLF
// COPERNICUS/S2/20180612T001111_20180612T001108_T56KLF
// COPERNICUS/S2/20180707T001109_20180707T001107_T56KLF
// COPERNICUS/S2/20180727T001109_20180727T001106_T56KLF
// COPERNICUS/S2/20180806T001109_20180806T001104_T56KLF
// COPERNICUS/S2/20190123T001109_20190123T001109_T56KLF
// COPERNICUS/S2/20190212T001109_20190212T001109_T56KLF




// ======== Lihou reef (West) (Coral Sea, Australia) =========
// Searched 33 out of 45 images
s2Utils.s2_composite_display_and_export(
  [
    // Excellent
    "COPERNICUS/S2/20190905T001111_20190905T001109_T56KMF",
    "COPERNICUS/S2/20200820T001121_20200820T001115_T56KMF",
    // Good
    "COPERNICUS/S2/20170905T000731_20170905T000731_T56KMF",
    "COPERNICUS/S2/20190702T001119_20190702T001117_T56KMF",
    "COPERNICUS/S2/20200731T001121_20200731T001115_T56KMF"
  ],
  false, true, REF1_OPTIONS);


// OK images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20180727T001109_20180727T001106_T56KMF",
    "COPERNICUS/S2/20180806T001109_20180806T001104_T56KMF",
    "COPERNICUS/S2/20180811T001111_20180811T001108_T56KMF",
    "COPERNICUS/S2/20200502T001111_20200502T001112_T56KMF",
    "COPERNICUS/S2/20200815T001109_20200815T001112_T56KMF"
  ],
  false, false, REF2_OPTIONS);

// Maybe
// COPERNICUS/S2/20180707T001109_20180707T001107_T56KMF



// ======== Mellish Reef (Coral Sea) =========
// Mellish Reef lies right on the boundary between two image tiles.
// The original planned tile of 56KQF did not have any good images
// and so the neighbouring 56KRF tile images were used instead.
// The CLOUDY_PIXEL_PERCENTAGE was raised to 10% rather than the usual
// 1%. This still only resulted in 6 images, of which all images were used.
// Searched 6 out of 6 images
// OK images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20160107T235158_20160108T011818_T56KRF",
    "COPERNICUS/S2/20160406T234954_20160407T043438_T56KRF",
    "COPERNICUS/S2/20160416T235041_20160417T061750_T56KRF"
  ],
  false, true, REF1_OPTIONS);


// Maybe images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20151128T234812_20170509T143613_T56KRF",
    "COPERNICUS/S2/20151208T234812_20170605T053015_T56KRF",
    "COPERNICUS/S2/20160117T234812_20160117T235108_T56KRF"
  ],
  false, false, REF2_OPTIONS);  




// ======== Marion Reef (Coral Sea, Australia) Northern section ===
// 60 out of 60 images searched
// excellent images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20180806T001109_20180806T001104_T56KME",
    "COPERNICUS/S2/20190905T001111_20190905T001109_T56KME",
    "COPERNICUS/S2/20210721T001109_20210721T001111_T56KME",
    "COPERNICUS/S2/20210726T001111_20210726T001112_T56KME"
  ],
  false, true, REF1_OPTIONS);

// 2 good, 3 OK images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20170905T000731_20170905T000731_T56KME",
    "COPERNICUS/S2/20210701T001109_20210701T001110_T56KME",
    "COPERNICUS/S2/20180212T001111_20180212T001105_T56KME",
    "COPERNICUS/S2/20180915T001059_20180915T001100_T56KME",
    "COPERNICUS/S2/20210616T001111_20210616T001109_T56KME"
  ],
  false, false, REF2_OPTIONS);



// ======== Marion Reef (Coral Sea, Australia) Southern section ===
// searched 57 out of 57 images
// Excellent images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20170831T000729_20170831T000725_T56KMD",
    "COPERNICUS/S2/20190905T001111_20190905T001109_T56KMD",
    "COPERNICUS/S2/20210726T001111_20210726T001112_T56KMD"
  ],
  false, true, REF1_OPTIONS);

// 2 goog, 3 OK images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20170925T001111_20170925T001105_T56KMD",
   "COPERNICUS/S2/20180806T001109_20180806T001104_T56KMD",
    "COPERNICUS/S2/20210721T001109_20210721T001111_T56KMD",
    "COPERNICUS/S2/20190920T001109_20190920T001108_T56KMD",
    "COPERNICUS/S2/20200427T001109_20200427T001104_T56KMD"
  ],
  false, false, REF2_OPTIONS);



// ======== Calder Bank, Coral Sea =========
// The CLOUD_PIXEL_PERCENTAGE was increased to 80% to get more images
// Unfortunately on 8 images were available. As a result no second
// reference image was created due to a lack of imagery.
// Searched 8 out of 8 images
// Maybe images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20170902T000111_20170902T000107_T56KPC",
    "COPERNICUS/S2/20170907T000119_20170907T000114_T56KPC"
  ],
  false, true, REF1_OPTIONS);



// ======== Saumarez Reefs (North) =========
// Searched 18 out of 18 images
s2Utils.s2_composite_display_and_export(
  [
    // Excellent
    "COPERNICUS/S2/20160927T000212_20160927T000213_T56KNB",
    "COPERNICUS/S2/20160609T000222_20160609T000222_T56KNB",
    // Good
    "COPERNICUS/S2/20160410T000222_20160410T000216_T56KNB",
    "COPERNICUS/S2/20170515T000221_20170515T000221_T56KNB",
    "COPERNICUS/S2/20170729T000219_20170729T000217_T56KNB"
  ],
  false, true, REF1_OPTIONS);


// OK images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20170214T000211_20170214T000212_T56KNB",
    "COPERNICUS/S2/20170415T000221_20170415T000217_T56KNB",
    "COPERNICUS/S2/20170525T000221_20170525T000220_T56KNB",
    "COPERNICUS/S2/20170704T000221_20170704T000217_T56KNB",
    "COPERNICUS/S2/20170823T000221_20170823T000219_T56KNB"
  ],
  false, false, REF2_OPTIONS); 





// ======== Frederick Reef (Coral Sea, Australia) ============
// CLOUD_PIXEL_PERCENTAGE 3%
// 24 of 24 images
// Excellent images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20160609T000222_20160609T000222_T56KPB",
    "COPERNICUS/S2/20160927T000212_20160927T000213_T56KPB",
    "COPERNICUS/S2/20170525T000221_20170525T000220_T56KPB"
  ],
  false, true, REF1_OPTIONS);

// Frederick Reef (Coral Sea, Australia)
// OK images
s2Utils.s2_composite_display_and_export(
  [
    // Good                                              
    "COPERNICUS/S2/20170515T000221_20170515T000221_T56KPB",
    "COPERNICUS/S2/20170729T000219_20170729T000217_T56KPB",
    // OK                                                
    "COPERNICUS/S2/20160410T000216_20160410T012205_T56KPB",
    "COPERNICUS/S2/20160420T000219_20160420T012157_T56KPB"
  ],
  false, false, REF2_OPTIONS);
// Maybe
// COPERNICUS/S2/20160530T000222_20160530T000223_T56KPB
// COPERNICUS/S2/20160709T000221_20160709T012229_T56KPB
// COPERNICUS/S2/20170704T000221_20170704T000217_T56KPB
// COPERNICUS/S2/20170907T000119_20170907T000114_T56KPB
// COPERNICUS/S2/20170818T000219_20170818T000215_T56KPB

// Low tide                                             
//"COPERNICUS/S2/20170704T000221_20170704T000217_T56KPB",
//"COPERNICUS/S2/20170818T000219_20170818T000215_T56KPB",

//Waves                                                
//"COPERNICUS/S2/20161106T000222_20161106T000220_T56KPB",
//"COPERNICUS/S2/20171027T000209_20171027T000204_T56KPB",
//"COPERNICUS/S2/20171116T000209_20171116T000205_T56KPB",
//"COPERNICUS/S2/20171206T000209_20171206T000206_T56KPB"




// ======== false, falsen Reefs (Coral Sea) =========
// CLOUD_PIXEL_PERCENTAGE of 100%
// Searched 2 out of 2 images
// OK images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20190220T234701_20190220T234701_T56KQB"
  ],
  false, true, REF1_OPTIONS);



// ======== Saumarez Reefs (South) =========
// Searched 80 out of 80 images
s2Utils.s2_composite_display_and_export(
  [
    // Excellent
    "COPERNICUS/S2/20160609T000222_20160609T000222_T56KNA", // High chlorophyll
    "COPERNICUS/S2/20170729T000219_20170729T000217_T56KNA",
    "COPERNICUS/S2/20180818T000241_20180818T000239_T56KNA",
    "COPERNICUS/S2/20190724T000251_20190724T000245_T56KNA",
    "COPERNICUS/S2/20200603T000239_20200603T000242_T56KNA",
    "COPERNICUS/S2/20200822T000249_20200822T000243_T56KNA",
    "COPERNICUS/S2/20210802T000241_20210802T000243_T56KNA",
    "COPERNICUS/S2/20210827T000239_20210827T000238_T56KNA",
    "COPERNICUS/S2/20210213T000241_20210213T000239_T56KNA"
  ],
  false, true, REF1_OPTIONS);


s2Utils.s2_composite_display_and_export(
  [
    //OK images
    // left as is RB
    "COPERNICUS/S2/20160927T000212_20160927T000213_T56KNA",
    "COPERNICUS/S2/20170214T000211_20170214T000212_T56KNA",
    "COPERNICUS/S2/20170415T000221_20170415T000217_T56KNA",
    "COPERNICUS/S2/20170525T000221_20170525T000220_T56KNA",
    "COPERNICUS/S2/20170823T000221_20170823T000219_T56KNA",
    "COPERNICUS/S2/20180714T000239_20180714T000238_T56KNA",
    "COPERNICUS/S2/20180813T000239_20180813T000234_T56KNA"
  ],
  false, false, REF2_OPTIONS); 



// ======== Wreck Reefs (Coral Sea) =========
// Searched 47 out of 47 images
// 5 good images
s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20181003T235241_20181003T235241_T56KQA",
    "COPERNICUS/S2/20181202T235241_20181202T235236_T56KQA",
    "COPERNICUS/S2/20190908T235241_20190908T235244_T56KQA",
    "COPERNICUS/S2/20191018T235251_20191018T235248_T56KQA",
    "COPERNICUS/S2/20200714T235251_20200714T235249_T56KQA"
  ],
  false, true, REF1_OPTIONS);


s2Utils.s2_composite_display_and_export(
  [
    // 3 OK, 1 maybe image
    "COPERNICUS/S2/20170923T235229_20170923T235231_T56KQA",
    "COPERNICUS/S2/20180302T235239_20180302T235235_T56KQA",
    "COPERNICUS/S2/20190928T235251_20190928T235246_T56KQA",
    // maybe
    "COPERNICUS/S2/20200922T235251_20200922T235250_T56KQA"
  ],
  false, false, REF2_OPTIONS); 



// ======== Cato Reef (Coral Sea) =========
// Searched 72 out of 72 images
s2Utils.s2_composite_display_and_export(
  [
    // Excellent
    "COPERNICUS/S2/20160923T235242_20160923T235240_T56KQV",
    "COPERNICUS/S2/20170908T235241_20170908T235243_T56KQV",
    "COPERNICUS/S2/20180829T235239_20180829T235235_T56KQV",
    "COPERNICUS/S2/20190908T235241_20190908T235244_T56KQV",
    "COPERNICUS/S2/20200823T235251_20200823T235250_T56KQV",
    "COPERNICUS/S2/20210828T235251_20210828T235246_T56KQV"
  ],
  false, true, REF1_OPTIONS);


s2Utils.s2_composite_display_and_export(
  [
    "COPERNICUS/S2/20180715T235251_20180715T235246_T56KQV",
    "COPERNICUS/S2/20190903T235249_20190903T235247_T56KQV",
    "COPERNICUS/S2/20190913T235249_20190913T235245_T56KQV",
    "COPERNICUS/S2/20191018T235251_20191018T235248_T56KQV",
    "COPERNICUS/S2/20200410T235239_20200410T235241_T56KQV",
    "COPERNICUS/S2/20200803T235251_20200803T235251_T56KQV",
    "COPERNICUS/S2/20200922T235251_20200922T235250_T56KQV",
    "COPERNICUS/S2/20210724T235249_20210724T235247_T56KQV"
  ],
  false, false, REF2_OPTIONS); 
  


// ============= BONUS imagery ===============
// This imagery was collected to ensure that no
// reefs were missed. Essentially checking that
// there are no shallow areas on the sea mounts
// We also include imagery of a reef in PNG that is 
// just outside the Coral Sea marine park, but very close
// to Ashmore reef.


// ======== Eastern Fields (PNG) - Far North =========
// Searched 12 out of 12 images
// CLOUD_PIXEL_PERCENTAGE 1%
s2Utils.s2_composite_display_and_export(
  [
    // OK
    "COPERNICUS/S2/20180417T003709_20180417T003703_T55LCJ",
    "COPERNICUS/S2/20181213T003659_20181213T003658_T55LCJ",
    "COPERNICUS/S2/20191223T003701_20191223T003659_T55LCJ",
    "COPERNICUS/S2/20200216T003659_20200216T003700_T55LCJ",
    "COPERNICUS/S2/20200913T003709_20200913T003707_T55LCJ"
  ],
  false, true, REF1_OPTIONS);


s2Utils.s2_composite_display_and_export(
  [
    // Maybe
    "COPERNICUS/S2/20170127T003701_20170127T003755_T55LCJ",
    "COPERNICUS/S2/20191203T003701_20191203T003703_T55LCJ",
    "COPERNICUS/S2/20210506T003701_20210506T003703_T55LCJ"
  ],
  false, false, REF2_OPTIONS); 


// ======== Fraser Seamount - South =========
// Searched 40 out of 40 images
// CLOUD_PIXEL_PERCENTAGE 0.3%
s2Utils.s2_composite_display_and_export(
  [
    // Excellent
    "COPERNICUS/S2/20160923T235242_20160923T235240_T56KQU",
    "COPERNICUS/S2/20170908T235241_20170908T235243_T56KQU",
    "COPERNICUS/S2/20180829T235239_20180829T235235_T56KQU",
    "COPERNICUS/S2/20190506T235259_20190506T235253_T56KQU",
    "COPERNICUS/S2/20190918T235241_20190918T235244_T56KQU",
    "COPERNICUS/S2/20210724T235249_20210724T235247_T56KQU",
    "COPERNICUS/S2/20210828T235251_20210828T235246_T56KQU"
  ],
  false, true, REF1_OPTIONS);


s2Utils.s2_composite_display_and_export(
  [
    // Good
    "COPERNICUS/S2/20190903T235249_20190903T235247_T56KQU",
    "COPERNICUS/S2/20190908T235241_20190908T235244_T56KQU",
    "COPERNICUS/S2/20200823T235251_20200823T235250_T56KQU"
  ],
  false, false, REF2_OPTIONS); 
  
// ======== U/N Sea mount - Central =========
// Searched 6 out of 6 images
s2Utils.s2_composite_display_and_export(
  [
    // Good
    "COPERNICUS/S2/20151128T234812_20170509T143613_T56KQE",
    "COPERNICUS/S2/20160416T235041_20160417T061750_T56KQE"
  ],
  false, true, REF1_OPTIONS);
