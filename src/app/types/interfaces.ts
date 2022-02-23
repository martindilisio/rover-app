export interface data {
    photos: photos[];
}

export interface photos {
    id:         number;
    sol:        number;
    camera:     camera;
    img_src:    string;
    earth_date: Date;
    rover:      rover;
}

export interface camera {
    id:        number;
    name:      string;
    rover_id:  number;
    full_name: string;
}

export interface rover {
    id:           number;
    name:         string;
    landing_date: Date;
    launch_date:  Date;
    status:       string;
}