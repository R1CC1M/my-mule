import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { useState, useRef, useMemo } from "react";
import { LOCATIONS } from "../constants";
import pinImage from "../public/favicon.png"
import Image from "next/image";
import { TEAM } from "../constants";

const Pin: React.FC = () => {
  return (
    <div>
        <Image priority src={pinImage} alt="" height={10} width={10} style={{
            cursor: 'pointer',
            display: 'block',
        }} />
    </div>
  );
};

type PopupInfo = {
  name: string,
  latitude: number,
  longitude: number,
  image: string,
}
const TeamSection: React.FC = () => {
  const [popupInfo, setPopupInfo] = useState<PopupInfo | null>(null);

  const pins = useMemo(() =>
    LOCATIONS.map(
      (city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        >
          <Pin />
        </Marker>
      )
    ),
    []
  );

  return (
    <HStack>
      <Box textAlign="left" margin="0 30px" maxWidth="400px">
        <Heading size="lg" margin="0.2rem 0 0.5em">
          {TEAM.HEADING}
        </Heading>
        <Text>{TEAM.DESCRIPTION}</Text>
      </Box>
      <Box>
        <Map
          initialViewState={{
            longitude: -37.4,
            latitude: 29.8,
            zoom: 1.2,
            bearing: 0,
            pitch: 0
          }}
          style={{ width: 900, height: 700 }}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MapboxAccessTokenDev}
        >
            {pins}

            {popupInfo && (
                <Popup anchor="top" longitude={popupInfo.longitude} latitude={popupInfo.latitude} onClose={() => setPopupInfo(null)}>
                    <div>
                        {popupInfo.name} favourite sticker
                    </div>
                    <Image src={popupInfo.image} alt="" width={200} height={200}/>
                </Popup>
            )}
        </Map>
      </Box>
    </HStack>
  );
};

export default TeamSection;
