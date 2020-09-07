use test_result_medigo_db;

select * from dokter;
select * from rumahsakit;
select * from penyakitterkait;
select * from keahlian;
select * from spesialisasi;
select * from dokter_has_keahlian;
select * from dokter_has_penyakitterkait;
select * from jadwalpraktik;


-- get spesialisasi
select Dokter.id as ID_Dokter, Spesialisasi.id as ID_Spesialisasi, Nama, Gender, Domisili, Spesialisasi, Deskripsi from dokter 
join spesialisasi on dokter.Spesialisasi_id = spesialisasi.id;


-- get keahlian
select Dokter_id, Keahlian_id, Nama, Gender, Domisili, Keahlian from dokter_has_keahlian as dhk 
join dokter as d on dhk.Dokter_id = d.id
join keahlian as k on dhk.Keahlian_id = k.id where Dokter_id = 1;


-- get penyakit terkait
select Dokter_id, PenyakitTerkait_id, Nama, Gender, Domisili, Penyakit from dokter_has_penyakitterkait as dhp 
join dokter as d on dhp.Dokter_id = d.id
join penyakitterkait as pt on dhp.PenyakitTerkait_id = pt.id;


-- get jadwal join dokter, rumahsakit, spesialisasi
select idDokter, idRS, BookingOnline, Hari, Jam, Nama, Gender, Domisili, RumahSakit, AlamatRS, Spesialisasi_id, Spesialisasi from jadwalpraktik as jp 
join dokter as d on jp.idDokter = d.id
join rumahsakit as rs on jp.idRS = rs.id
join spesialisasi as s on d.Spesialisasi_id = s.id;


