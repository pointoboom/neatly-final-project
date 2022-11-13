SELECT * FROM public.room_types
WHERE room_types_id <> 1
ORDER BY RANDOM()
LIMIT 2