export const commonSchema = {
    id: {
        name: 'id',
        label: 'Id',
    },
    tag: {
        name: 'element',
        label: 'Element',
    },
}

export const elementsSchema = {
    line: {
        label: 'Line',
        attributes: {
            x1: {
                name: 'x_start_coordinate',
                label: 'Horizontal start coordinate',
                type: 'number',
                required: true,
            },
            y1: {
                name: 'y_start_coordinate',
                label: 'Vertical start coordinate',
                type: 'number',
                required: true,
            },
            x2: {
                name: 'x_end_coordinate',
                label: 'Horizontal end coordinate',
                type: 'number',
                required: true,
            },
            y2: {
                name: 'y_end_coordinate',
                label: 'Vertical end coordinate',
                type: 'number',
                required: true,
            },
        }
    },
    polyline: {
        label: 'Polyline',
        attributes: {
            points: {
                name: 'points',
                label: 'Points',
                required: true,
            },
        }
    },
    polygon: {
        label: 'Polygon',
        attributes: {
            points: {
                name: 'points',
                label: 'Points',
                required: true,
            },
        }
    },
    rect: {
        label: 'Rect',
        attributes: {
            x: {
                name: 'x_coordinate',
                label: 'Horizontal coordinate',
                type: 'number',
                required: true,
            },
            y: {
                name: 'y_coordinate',
                label: 'Vertical coordinate',
                type: 'number',
                required: true,
            },
            rx: {
                name: 'x_radius',
                label: 'Horizontal angle radius',
                type: 'number',
            },
            ry: {
                name: 'y_radius',
                label: 'Vertical angle radius ',
                type: 'number',
            },
            height: {
                name: 'height',
                label: 'Height',
                type: 'number',
                required: true,
            },
            width: {
                name: 'width',
                label: 'Width',
                type: 'number',
                required: true,
            },
        }
    },
    circle: {
        label: 'Circle',
        attributes: {
            cx: {
                name: 'x_coordinate',
                label: 'Horizontal coordinate',
                type: 'number',
                required: true,
            },
            cy: {
                name: 'y_coordinate',
                label: 'Vertical coordinate',
                type: 'number',
                required: true,
            },
            r: {
                name: 'radius',
                label: 'Radius',
                type: 'number',
                required: true,
            },
        }
    },
    ellipse: {
        label: 'Ellipse',
        attributes: {
            cx: {
                name: 'x_coordinate',
                label: 'Horizontal coordinate',
                type: 'number',
                required: true,
            },
            cy: {
                name: 'y_coordinate',
                label: 'Vertical coordinate',
                type: 'number',
                required: true,
            },
            rx: {
                name: 'x_radius',
                label: 'Horizontal radius',
                type: 'number',
                required: true,
            },
            ry: {
                name: 'y_radius',
                label: 'Vertical radius',
                type: 'number',
                required: true,
            },
        }
    },
    path: {
        label: 'Path',
        attributes: {
            d: {
                name: 'definition',
                label: 'Definition',
                required: true,
            },
        }
    },
}

export const stylesSchema = {
    stroke: {
        name: 'stroke',
        label: 'Stroke',
    },
    fill: {
        name: 'fill',
        label: 'Fill',
    },
    strokeWidth: {
        name: 'stroke-width',
        label: 'Stroke width',
    },
}
