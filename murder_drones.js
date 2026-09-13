// ==========================================
// MURDER DRONES - SANDBOXELS
// ==========================================

// WORKER DRONE
elements.worker_drone = {
    color: ["#777777", "#999999", "#555555"],
    behavior: behaviors.POWDER,
    category: "Murder Drones",
    state: "solid",
    density: 1500,

    // Resistência inicial
    hardness: 0.8,

    // Quando receber dano suficiente, deixa peças e óleo
    breakInto: ["drone_parts", "oil_drone"]
};


// OIL
elements.oil_drone = {
    color: "#151515",
    behavior: behaviors.LIQUID,
    category: "Murder Drones",
    state: "liquid",
    density: 850,
    viscosity: 100
};


// DRONE PARTS
elements.drone_parts = {
    color: ["#777777", "#999999", "#444444"],
    behavior: behaviors.POWDER,
    category: "Murder Drones",
    state: "solid",
    density: 2500
};
