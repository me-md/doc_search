{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": 4,
   "metadata": {},
   "outputs": [],
   "source": [
    "import geopandas as gpd\n",
    "from shapely.geometry import Point, Polygon\n",
    "import matplotlib.pyplot as plt\n",
    "import pandas as pd\n",
    "%matplotlib inline\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 5,
   "metadata": {},
   "outputs": [
    {
     "ename": "DriverError",
     "evalue": "./maps/states_21basic/states.shp: No such file or directory",
     "output_type": "error",
     "traceback": [
      "\u001b[0;31m---------------------------------------------------------------------------\u001b[0m",
      "\u001b[0;31mCPLE_OpenFailedError\u001b[0m                      Traceback (most recent call last)",
      "\u001b[0;32mfiona/_shim.pyx\u001b[0m in \u001b[0;36mfiona._shim.gdal_open_vector\u001b[0;34m()\u001b[0m\n",
      "\u001b[0;32mfiona/_err.pyx\u001b[0m in \u001b[0;36mfiona._err.exc_wrap_pointer\u001b[0;34m()\u001b[0m\n",
      "\u001b[0;31mCPLE_OpenFailedError\u001b[0m: ./maps/states_21basic/states.shp: No such file or directory",
      "\nDuring handling of the above exception, another exception occurred:\n",
      "\u001b[0;31mDriverError\u001b[0m                               Traceback (most recent call last)",
      "\u001b[0;32m<ipython-input-5-70b009fd633d>\u001b[0m in \u001b[0;36m<module>\u001b[0;34m\u001b[0m\n\u001b[0;32m----> 1\u001b[0;31m \u001b[0musa\u001b[0m \u001b[0;34m=\u001b[0m \u001b[0mgpd\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mread_file\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0;34m'./maps/states_21basic/states.shp'\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0m",
      "\u001b[0;32m~/anaconda3/lib/python3.7/site-packages/geopandas/io/file.py\u001b[0m in \u001b[0;36mread_file\u001b[0;34m(filename, bbox, **kwargs)\u001b[0m\n\u001b[1;32m     74\u001b[0m \u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m     75\u001b[0m     \u001b[0;32mwith\u001b[0m \u001b[0mfiona_env\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m:\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0;32m---> 76\u001b[0;31m         \u001b[0;32mwith\u001b[0m \u001b[0mreader\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0mpath_or_bytes\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0;34m**\u001b[0m\u001b[0mkwargs\u001b[0m\u001b[0;34m)\u001b[0m \u001b[0;32mas\u001b[0m \u001b[0mfeatures\u001b[0m\u001b[0;34m:\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0m\u001b[1;32m     77\u001b[0m \u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m     78\u001b[0m             \u001b[0;31m# In a future Fiona release the crs attribute of features will\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n",
      "\u001b[0;32m~/anaconda3/lib/python3.7/site-packages/fiona/env.py\u001b[0m in \u001b[0;36mwrapper\u001b[0;34m(*args, **kwargs)\u001b[0m\n\u001b[1;32m    394\u001b[0m     \u001b[0;32mdef\u001b[0m \u001b[0mwrapper\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0;34m*\u001b[0m\u001b[0margs\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0;34m**\u001b[0m\u001b[0mkwargs\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m:\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m    395\u001b[0m         \u001b[0;32mif\u001b[0m \u001b[0mlocal\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0m_env\u001b[0m\u001b[0;34m:\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0;32m--> 396\u001b[0;31m             \u001b[0;32mreturn\u001b[0m \u001b[0mf\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0;34m*\u001b[0m\u001b[0margs\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0;34m**\u001b[0m\u001b[0mkwargs\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0m\u001b[1;32m    397\u001b[0m         \u001b[0;32melse\u001b[0m\u001b[0;34m:\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m    398\u001b[0m             \u001b[0;32mif\u001b[0m \u001b[0misinstance\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0margs\u001b[0m\u001b[0;34m[\u001b[0m\u001b[0;36m0\u001b[0m\u001b[0;34m]\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0mstr\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m:\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n",
      "\u001b[0;32m~/anaconda3/lib/python3.7/site-packages/fiona/__init__.py\u001b[0m in \u001b[0;36mopen\u001b[0;34m(fp, mode, driver, schema, crs, encoding, layer, vfs, enabled_drivers, crs_wkt, **kwargs)\u001b[0m\n\u001b[1;32m    251\u001b[0m         \u001b[0;32mif\u001b[0m \u001b[0mmode\u001b[0m \u001b[0;32min\u001b[0m \u001b[0;34m(\u001b[0m\u001b[0;34m'a'\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0;34m'r'\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m:\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m    252\u001b[0m             c = Collection(path, mode, driver=driver, encoding=encoding,\n\u001b[0;32m--> 253\u001b[0;31m                            layer=layer, enabled_drivers=enabled_drivers, **kwargs)\n\u001b[0m\u001b[1;32m    254\u001b[0m         \u001b[0;32melif\u001b[0m \u001b[0mmode\u001b[0m \u001b[0;34m==\u001b[0m \u001b[0;34m'w'\u001b[0m\u001b[0;34m:\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m    255\u001b[0m             \u001b[0;32mif\u001b[0m \u001b[0mschema\u001b[0m\u001b[0;34m:\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n",
      "\u001b[0;32m~/anaconda3/lib/python3.7/site-packages/fiona/collection.py\u001b[0m in \u001b[0;36m__init__\u001b[0;34m(self, path, mode, driver, schema, crs, encoding, layer, vsi, archive, enabled_drivers, crs_wkt, ignore_fields, ignore_geometry, **kwargs)\u001b[0m\n\u001b[1;32m    157\u001b[0m             \u001b[0;32mif\u001b[0m \u001b[0mself\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mmode\u001b[0m \u001b[0;34m==\u001b[0m \u001b[0;34m'r'\u001b[0m\u001b[0;34m:\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m    158\u001b[0m                 \u001b[0mself\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0msession\u001b[0m \u001b[0;34m=\u001b[0m \u001b[0mSession\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0;32m--> 159\u001b[0;31m                 \u001b[0mself\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0msession\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mstart\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0mself\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0;34m**\u001b[0m\u001b[0mkwargs\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0m\u001b[1;32m    160\u001b[0m             \u001b[0;32melif\u001b[0m \u001b[0mself\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mmode\u001b[0m \u001b[0;32min\u001b[0m \u001b[0;34m(\u001b[0m\u001b[0;34m'a'\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0;34m'w'\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m:\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m    161\u001b[0m                 \u001b[0mself\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0msession\u001b[0m \u001b[0;34m=\u001b[0m \u001b[0mWritingSession\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n",
      "\u001b[0;32mfiona/ogrext.pyx\u001b[0m in \u001b[0;36mfiona.ogrext.Session.start\u001b[0;34m()\u001b[0m\n",
      "\u001b[0;32mfiona/_shim.pyx\u001b[0m in \u001b[0;36mfiona._shim.gdal_open_vector\u001b[0;34m()\u001b[0m\n",
      "\u001b[0;31mDriverError\u001b[0m: ./maps/states_21basic/states.shp: No such file or directory"
     ]
    }
   ],
   "source": [
    "usa = gpd.read_file('./maps/states_21basic/states.shp')\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": []
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.7.4"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 2
}
