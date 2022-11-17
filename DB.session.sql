SELECT room_no, type_name, bed_type, status_name 
    FROM room_managements
    left join room_types
    on room_managements.room_types_id = room_types.room_types_id
    left join status
    on room_managements.status_id = status.status_id
