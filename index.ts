/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// This example creates a 2-pixel-wide red polyline showing the path of
// the first trans-Pacific flight between Oakland, CA, and Brisbane,
// Australia which was made by Charles Kingsford Smith.

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 13,
      center: { lat: 49.859934, lng: 24.043257 },
      mapTypeId: 'terrain',
    }
  );

  const flightPlanCoordinates = [
    { lat: 49.83968, lng: 24.02972 },
    { lat: 49.850178, lng: 24.026793 },
    { lat: 49.851634, lng: 24.032264 },
    { lat: 49.859934, lng: 24.043257 },
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#2986cc',
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(map);
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
