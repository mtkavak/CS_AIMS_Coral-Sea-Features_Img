# Coral Sea Features Satellite imagery (Sentinel 2 and Landsat 8) 2015 – 2021 (AIMS)

Eric Lawrey – 14 Feb 2022

Australian Institute of Marine Science

This repository contains all the scripts used to create the imagery used in the 
development of the Coral Sea Features dataset. This dataset contains satellite
imagery of the Coral Sea reef areas and select reef areas around the Globe.
The purpose of the Globe imagery is to develop training examples of reef mapping, 
while the Coral Sea imagery is to digitise the boundaries of coral reefs.

This repository contains: 
1. Google Earth Engine javascript code that generates the satellite image composites 
and exports them to Google Drive. 
2. Local Python scripts for subsequent optimisation of the image file format and 
generation of GDAL virtual layers. 

This repository does not contain the image data itself. You can download the final
imagery.


This dataset contains processing for two regions:
- Coral Sea: Used for mapping the reefs for the [Coral Sea mapping project](https://eatlas.org.au/projects-other/coral-sea-reef-mapping)
- Global: Selected reef areas around Australia and the rest of the world. These
were done to test how well the image processing algorithms work across the globe
and to allow validation of the approach used for reef boundary mapping with a
diverse set of reefs.

This repository is intended to allow others to reproduce and extend this
dataset. 

More information about this dataset can be found on the 
[Dataset metadata page](https://eatlas.org.au/data/uuid/df5a5b47-ad4c-431e-be49-af52f64aafce).

This dataset is an update and improvement to the 
[Coral Sea Sentinel 2 Marine Satellite Composite Draft Imagery version 0 (AIMS)](https://eatlas.org.au/data/uuid/2932dc63-9c9b-465f-80bf-09073aacaf1c)
dataset.

## Dataset description

This dataset contains composite satellite images for the Coral Sea
region based on 10 m resolution Sentinel 2 imagery from 2015 – 2021. This dataset
also contains processing of Landsat 8 imagery.

This collection contains composite imagery for 31 Sentinel 2 tiles in the Coral Sea. 

For each tile there are 5 different colour and contrast enhancement styles intended 
to highlight different features.

![Preview map of this dataset](./media/CS_AIMS_Coral-Sea-Features_Img_preview-map.jpg)
A preview of the dataset and the image styles. 

## Folders
`big-files`: This contains all large files in this dataset including all the final satellite
imagery and GIS file to make preview maps. These files are not stored in the repository
as GitHub and particularly Google Earth Engine impose limitations on repository storage.
These files are available for [download and browsing](https://nextcloud.eatlas.org.au/apps/sharealias/a/cs-aims-coral-sea-features-img).

`media`: This contains preview images. These images are kept small to allow this repository
to be uploaded to Google Earth Engine, which only supports small files.

`src\01-gee`: This corresponds to the Google Earth Engine scripts used for the production
of this imagery in this dataset.

`src\02-local`: This contains the Python\GDAL script that is run on your local machine to
post process the imagery downloaded from GEE into the `unprocessed-data` folder. This script
optimises the internals of the GeoTiff images (adding internal tiling and overviews) and
creates GDAL virtual rasters to make the images easier to manipulate in QGIS.

`unprocessed-data`: Images generated by GEE should be exported to Google Drive then downloaded
into this folder. The `src\02-local\convert.py` script will then process them into the `big-files\data`
folder. Once the image has been processed they can be deleted from this directory.

## Reproducing this dataset

## Setup and installation
This dataset is created using the Google Earth Engine followed by some
file format adjustments using a Python script to process the imagery using
GDAL tools.

To reproduce this dataset from scratch you will need:
 - [Google Earth Engine account](https://earthengine.google.com/)
 - Python and GDAL installed. On Windows [OSGeo4W](https://www.osgeo.org/projects/osgeo4w/) 
 can be used to install both QGIS and GDAL. If you have troubles with OSGeo4W you can install
 GDAL via Anaconda)

On Windows this can be done using OSGeo4W or Anaconda.
 
### OSGeo4W
I have used OSGeo4W for many years to install both QGIS and GDAL.
1. Download and install OSGeo4W making sure GDAL gets installed (https://www.osgeo.org/projects/osgeo4w/)
2. Start the OSGeo4W cmd window. The default path for this is C:\OSGeo4W64\OSGeo4W.bat
3. Test that GDAL installed OK by running: `gdalinfo --version`
   You should get something like: GDAL 3.4.1, released 2021/12/27
4. `cd <directory to this script (convert.py)>`
5. `python convert.py`

If you have trouble with GDAL from OSGeo4W (which sometime happens) you can install GDAL
via Anaconda.

### Anaconda - GDAL only
1. Download and install Anaconda from (https://www.anaconda.com/products/individual). 
2. Start the Anaconda Navigator / CMD.exe 
3. Run `conda install -c conda-forge gdal`
4. Test that GDAL installed OK by running: `gdalinfo --version`
   You should get something like: GDAL 3.0.2, released 2019/10/28
5. `cd <directory to this script (convert.py)>`
6. `python convert.py`
 

### Google Earth Setup

The easiest way to reproduce the images in this dataset is to copy the 
`src\01-gee` javascript files into you interactive session in Google
Earth Engine. To get them to run you need to adjust the path to the
`s2Utils` to ensure you are running the same version used in the creation
of this dataset. 

### Clone this repository into Google Earth Engine
If you want to entended the code in this repository it is probably better to
clone the entire repository into GEE. To do this:

1. Create an empty repository in GEE using `Scripts\NEW\Repository`. Name the 
repository `CS_AIMS_Coral-Sea-Features_Img`. Technically the names don't need
to match but it could get confusing if the names don't match.

2. On you local machine clone the repository from GitHub. 
```
git clone https://github.com/eatlas/CS_AIMS_Coral-Sea-Features_Img.git
```

3. Change into the newly downloaded empty repository, cloned from GEE. 
```
cd CS_AIMS_Coral-Sea-Features_Img
```

4. Switch the push origin to the GEE repository. Find the path to your empty
GEE repository by hovering over the new repository and select the `Configure` 
button (it looks like a small cog). 
This will show the command to clone the new repository to your local machine. For
```
git clone https://earthengine.googlesource.com/users/<username>/CS_AIMS_Coral-Sea-Features_Img
```
We are interested in the path to the repository. Add this as the push
origin. 
```
git remote set-url origin https://earthengine.googlesource.com/users/<username>/CS_AIMS_Coral-Sea-Features_Img
```
5. Push the repository up to GEE.
```
git push 
```
6. Refresh the repositories in GEE. There is a refresh button next to the `NEW` button.
You can now make changes on your local machine and push them up to GEE. If you make changes
on GEE you will need to perform a `git pull`. 

### Pushing code back to GitHub
If you have write access you can push code back to GitHub instead of GEE using:
```
git push https://github.com/eatlas/CS_AIMS_Coral-Sea-Features_Img.git
```



## Common Issues with using the code

### Error in Google Earth Engine: Cannot find required repo: users/ericlawrey/CS_AIMS_Sentinel2-marine_V0:utils
If you make a copy of the code in your own repository then you need to update the path to the `s2Utils` script to point at your local copy. The `users/ericlawrey/CS_AIMS_Coral-Sea-Features_Img:s2Utils` is not public, thus can't be referenced from a copy. To fix this update the username and repository name to match your copy. I haven't made it public on GEE because it might get out of sync with the Git version. 

### Does the `users/ericlawrey/World_ESA_Sentinel-2-tiling-grid` path need updating
This dataset is made public on the Google Earth Engine to allow it to be easily reused in the code and so its path does not need updating. You can find details of this dataset [here](https://code.earthengine.google.com/?asset=users/ericlawrey/World_ESA_Sentinel-2-tiling-grid)


## Videos

[Selecting the best Coral Sea Sentinel 2 imagery (Coral Sea Mapping project)](https://www.youtube.com/watch?v=EqmLZmxZcQc) 
This video is from the [original draft version of this dataset](https://eatlas.org.au/data/uuid/2932dc63-9c9b-465f-80bf-09073aacaf1c). This is a team training video on how to select images for creating composite images. Most of this video is still relevant in that the process used for classifying and choosing images to include in the final composites is the same as described in this video. The main changes are:
- It is now recommended to get the source code into GEE that `git clone` and `git push` are used, as described above, instead manually copying each file.
- The image selection script no longer generates lots of image colour grading styles to speed it up.
- The Sentinel 2 utility library is now called `s2Utils` instead of `utils` to accomodate the Landsat utils library.
- The dataset name was renamed from `CS_AIMS_Sentinel2-marine_V1` to `CS_AIMS_Coral-Sea-Features_Img` to indicate that this dataset contains the imagery used in the creation of the `Coral-Sea-Features` dataset.



