import * as L from "leaflet";

declare module "leaflet" {
  namespace Routing {
    interface RoutingControlOptions extends L.ControlOptions {
      waypoints?: L.LatLng[];
      lineOptions?: L.PolylineOptions;
      addWaypoints?: boolean;
      draggableWaypoints?: boolean;
      fitSelectedRoutes?: boolean;
      routeWhileDragging?: boolean;
      showAlternatives?: boolean;
      altLineOptions?: L.PolylineOptions;
      router?: any;
      createMarker?: (i: number, wp: L.LatLng, nWps: number) => L.Marker;
    }

    class Control extends L.Control {
      constructor(options?: RoutingControlOptions);
      getPlan(): any;
      setWaypoints(waypoints: L.LatLng[]): void;
    }

    function control(options?: RoutingControlOptions): Control;
  }

  const Routing: typeof Routing;
}
