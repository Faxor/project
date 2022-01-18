from rest_framework import serializers
from blog.models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        firelds = ('id', 'titel', 'author','excerpt','content','status')