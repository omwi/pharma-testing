import { AdvancedMarker, Map } from '@vis.gl/react-google-maps';

import { GOOGLE_MAP_ID } from '@/app/env';

import * as styles from './markered-map.module.css';

/**
 *
 * @param {{coordinates: {lat: number, lng: number}}} param0
 * @returns
 */
export default function MarkeredMap({ coordinates }) {
  const { lat, lng } = coordinates;
  return (
    <Map
      className={styles.map}
      mapId={GOOGLE_MAP_ID}
      defaultCenter={{ lat, lng }}
      defaultZoom={17}
      disableDefaultUI
    >
      <AdvancedMarker position={{ lat, lng }} />
    </Map>
  );
}
