<script>
    const teamMembers = [
        {
            name: 'Daniil',
            surname: 'Prostiruk',
            position: 'CEO',
            bio: 'Mango Tea enjoyer',
            image: '/dprost.jpg'
        },

        {
            name: 'Alexandra',
            surname: 'Kuzmich',
            position: 'Web Developer',
            bio: 'Pigeon stealer',
            image: '/skuzmich.jpg'
        },

        {
            name: 'Anatoly',
            surname: 'Soldatov',
            position: 'Big boss',
            bio: 'Papochka',
            image: '/anatolii.jpg'
        },

        {
            name: 'Evgeny',
            surname: 'Bobkunov',
            position: 'El Amigo',
            bio: 'Yo bebo agua',
            image: '/ebob.jpg'
        },

        {
            name: 'Ivan',
            surname: 'Golov',
            position: 'Figma master',
            bio: 'I am a daisyUI master and Taiwind CSS lover',
            image: '/igolov.jpg'
        }
    ];
</script>

<div
    class="flex max-w-5xl mx-auto custom-font py-8 items-center justify-center"
>
    <main class="p-6">
        <h1 class="text-4xl font-bold mb-4">Our Team</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {#each teamMembers as member}
                <div class="bg-white rounded-lg shadow p-4">
                    <img
                        class="w-full h-48 object-cover object-center rounded-md mb-4"
                        src={member.image}
                        alt={member.name}
                    />
                    <h2 class="text-xl font-semibold">{member.name}</h2>
                    <h2 class="text-xl font-semibold mb-2">{member.surname}</h2>
                    <p class="text-gray-600 mb-2">{member.position}</p>
                    <p class="text-gray-800">{member.bio}</p>
                </div>
            {/each}
        </div>
    </main>
</div>

<style>
    .text-4xl {
        font-size: 40px;
        text-align: center;
        color: #007349;
    }
</style>
