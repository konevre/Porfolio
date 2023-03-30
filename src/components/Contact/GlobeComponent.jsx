import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";

const GlobeComponent = ({ state }) => {
    const globeEl = useRef();

    useEffect(() => {
        globeEl.current.pointOfView(
            { lat: 20.45, lng: 120.55, altitude: 2.5 },
            2000
        );
        globeEl.current.controls().enableZoom = false;
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.7;

        const id = setInterval(() => {
            const lat = 52.53667;
            const lng = 103.88639;
            const altitude = 2.5;
            globeEl.current.pointOfView({ lat, lng, altitude }, 2000);
        }, 30000);

        return () => clearInterval(id);
    }, []);

    const handleGlobeClick = (event) => {
        const { lat, lng } = event;
        const altitude = 2.5;
        globeEl.current.pointOfView({ lat, lng, altitude }, 2000);
    };

    const labelHover = (d) =>
        d.name === "Novosibirsk"
            ? `
        <div style="background-color: #333333; padding: 0.5em; font-weight: 300; font-size: 0.9em; border-radius: 0.25rem; ">Located in ${d.name}, Russia</div>
    `
            : `
    <div style="background-color: #333333; padding: 0.5em; font-weight: 300; font-size: 0.9em; border-radius: 0.25rem; ">Born in ${d.name}, Russia</div>
`;

    return (
        <Globe
            ref={globeEl}
            backgroundColor="#141416"
            atmosphereColor="#141416"
            width={750}
            height={750}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            labelsData={[
                {
                    name: "Novosibirsk",
                    lat: 55.018803,
                    lng: 82.933952,
                    color: "#f59e0b",
                },
                {
                    name: "Angarsk",
                    lat: 52.53667,
                    lng: 103.88639,
                    color: "#6b21a8",
                },
            ]}
            labelLat={(d) => d.lat}
            labelLng={(d) => d.lng}
            labelText={(d) => d.name}
            labelAltitude={0.01}
            labelSize={0}
            labelDotRadius={1}
            labelResolution={3}
            labelColor={(d) => d.color}
            labelLabel={labelHover}
            onLabelClick={handleGlobeClick}
        />
    );
};

export default GlobeComponent;
