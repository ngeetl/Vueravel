<template>
    <div>
        <div class="overflow-hidden rounded-lg font-normal shadow-lg">
            <div class="w-full">
                <img src="https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F50230afc-ad5b-4721-8782-37c926de6310%2F4e76700e-939c-4cc6-8da9-00064bfe32a0%2FUntitled.jpeg&amp;blockId=2a0603fa-b6ad-4c14-96df-5142b3398cc4&amp;width=512" class="css-1xdhyk6 e5kxa4l0" style="display: block; object-fit: cover;  width: 100%; height: 100%; object-position: center 50%;"/>
            </div>
            <div class="my-3 flex justify-center items-center text-gray-500 text-sm">{{ title }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecruitBoxComponent',
    props: {
        title: String,
    },
    setup(props) {

        return {
            ...props
        };
    }
}
</script>

<style>

</style>