$(document).ready(function () {
    // 1. Fade-in efek pada gambar galeri
    $(".gallery img").each(function (index) {
        $(this).delay(200 * index).fadeTo(1000, 1);
    });

    // 2. Menampilkan modal saat gambar di klik
    $(".gallery img").click(function () {
        const imgSrc = $(this).attr("src");
        $("#modalImage").attr("src", imgSrc);
        $(".modal").fadeIn();
    });

    // 3. Menutup modal dengan klik pada tombol close atau di luar modal
    $(".close, .modal").click(function (event) {
        if ($(event.target).is(".modal, .close")) {
            $(".modal").fadeOut();
        }
    });
});
