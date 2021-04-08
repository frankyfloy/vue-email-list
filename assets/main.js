var app = new Vue({
    el: '#root',
    data: {
        arrEmail : [],
        numEmail : 10,
    },



    methods: {
        emailGenerator :function () {
            this.arrEmail = [];
            for (var i = 0; i < this.numEmail; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response)  => {
                    console.log(response.data);
                    if (response.data.success) {
                        this.arrEmail.push(response.data.response)
                        console.log(this.arrEmail);
                    }

                    // else {
                    //     numEmail + 1;
                    // }
                });

            }

        }
    },
});
