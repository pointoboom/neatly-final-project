SELECT * FROM reservations
LEFT  JOIN reservations_request 
ON reservations.reservation_id = reservations_request.reservation_id
LEFT  JOIN request
ON reservations_request.request_id = request.request_id
LEFT  JOIN bills
ON reservations.reservation_id = bills.reservation_id
where reservations.reservation_id = 27


