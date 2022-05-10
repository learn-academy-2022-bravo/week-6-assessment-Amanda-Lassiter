# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController
  def index #the R in CRUD
# BlogPostsController is the main controller, which inherits from ApplicationController
# index is a method that makes an Active Record call 
    # ---2)
    @posts = BlogPost.all
  end #every def has an end
# saving all the content (.all) from the database as an instance variable

  # ---3)
  def show
    @post = BlogPost.find(params[:id])
  end #every def has an end
  #Show is a RESTful route that looks for one item in the database. Inside the show method we will make an Active Record call that finds one item by id ([:id]). The id comes from the url params. Here, we are looking for a single post. 

  # ---4)
  def new #midway between C and R in CRUD
    @post = BlogPost.new
  end #every def has an end
  #new is a RESTful route that displays a form for the user, which, in this case, is a blog post

  def create #the C in CRUD
  #create is a RESTful route that submits user data to the database (the data filled out in the post)
    # ---5)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    # _path indicates that we are referencing the route alias "blog_post"
    else
      redirect_to new_blog_post_path
    # new_blog_post is another alias
    end
  end#every def has an end

  def edit
  # edit is a RESTful route that allows users to edit an item as determined by its id. 
    # ---6)
    @post = BlogPost.find(params[:id])
    #A blog post is located for editing (adding information to the database)
  end #every def has an end

  def update #the U in CRUD
    @post = BlogPost.find(params[:id])
    #A blog post is located for updating
    # ---7)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end #every def has an end
  #The blog post is updated

  def destroy #the D in CRUD
    @post = BlogPost.find(params[:id])
    # A blog post is located by its id for deletion
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      redirect_to blog_post_path(@post)
    # information is removed from the database (a blog post is deleted/destroyed)
    end
  end #every def has an end

  # ---9)
  private
  def blog_post_params
  #Private means that all methods defined from now on are to be private. They can only be called from within the object (from other methods that the class defines). 
    # ---10)
    params.require(:blog_post).permit(:title, :content)
    # Blog posts are required to have a title and content (the params)
  end #every def has an end
end
