declare global {
  interface Window {
    google: typeof google;
    initMap: () => void;
  }
}

declare namespace google {
  namespace maps {
    class Map {
      constructor(mapDiv: Element, opts?: MapOptions);
    }
    
    class Marker {
      constructor(opts?: MarkerOptions);
      addListener(eventName: string, handler: Function): void;
    }
    
    class InfoWindow {
      constructor(opts?: InfoWindowOptions);
      open(map: Map, anchor?: Marker): void;
    }
    
    class Size {
      constructor(width: number, height: number);
    }
    
    class Point {
      constructor(x: number, y: number);
    }
    
    interface MapOptions {
      zoom?: number;
      center?: LatLng | LatLngLiteral;
      styles?: MapTypeStyle[];
      disableDefaultUI?: boolean;
      zoomControl?: boolean;
      mapTypeControl?: boolean;
      scaleControl?: boolean;
      streetViewControl?: boolean;
      rotateControl?: boolean;
      fullscreenControl?: boolean;
    }
    
    interface MarkerOptions {
      position?: LatLng | LatLngLiteral;
      map?: Map;
      icon?: string | Icon | Symbol;
      title?: string;
      animation?: Animation;
    }
    
    interface InfoWindowOptions {
      content?: string | Element;
    }
    
    interface LatLngLiteral {
      lat: number;
      lng: number;
    }
    
    interface Icon {
      url: string;
      scaledSize?: Size;
      anchor?: Point;
    }
    
    interface MapTypeStyle {
      featureType?: string;
      elementType?: string;
      stylers?: Array<{[key: string]: any}>;
    }
    
    enum Animation {
      DROP = 1,
      BOUNCE = 2
    }
  }
}